package com.groupassignment.gl.tickettrackerapp.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.groupassignment.gl.tickettrackerapp.dao.TicketDao;
import com.groupassignment.gl.tickettrackerapp.model.Ticket;

@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	TicketDao ticketdao;

	@Override
	public List<Ticket> findAll() {

		return ticketdao.findAll();
	}

	@Override
	public Ticket findById(int id) {
		Optional<Ticket> result = ticketdao.findById(id);
		Ticket ticket = null;
		if (result.isPresent())
			ticket = result.get();
		else
			throw new RuntimeException("Ticket is not present");
		return ticket;

	}

	@Override
	public void save(Ticket ticket) {

		String date = java.time.LocalDate.now().toString();
		ticket.setTicketCreated(date);
		ticketdao.save(ticket);

	}

	@Override
	public void deleteById(int id) {

		ticketdao.deleteById(id);
	}

	@Override
	public List<Ticket> filter(String expression) {
		List<Ticket> ticketList = this.findAll();
		List<Ticket> filteredList = ticketList.stream()
				.filter(ticket -> ticket.getTicketTitle().toLowerCase().contains(expression.toLowerCase())
						|| ticket.getTicketDesc().toLowerCase().contains(expression.toLowerCase()))
				.collect(Collectors.toList());
		return filteredList;
	}

}
