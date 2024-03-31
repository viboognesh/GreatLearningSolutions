package com.groupassignment.gl.tickettrackerapp.service;

import java.util.List;
import com.groupassignment.gl.tickettrackerapp.model.Ticket;

public interface TicketService {

	public List<Ticket> findAll();

	public Ticket findById(int id);

	public void save(Ticket ticket);

	public void deleteById(int id);

	public List<Ticket> filter(String expression);

}
