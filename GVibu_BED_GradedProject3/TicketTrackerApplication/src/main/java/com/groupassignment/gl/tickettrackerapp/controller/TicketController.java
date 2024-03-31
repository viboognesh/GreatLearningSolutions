package com.groupassignment.gl.tickettrackerapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.groupassignment.gl.tickettrackerapp.model.Ticket;
import com.groupassignment.gl.tickettrackerapp.service.TicketService;

@Controller
@RequestMapping("/tickets")
public class TicketController {

	@Autowired
	TicketService ticketService;

	@GetMapping("/list")
	public String findAll(Model model) {
		List<Ticket> tickets = ticketService.findAll();

		model.addAttribute("tickets", tickets);
		return "tickets/list-tickets";

	}

	@GetMapping("/showTicketFormForAdd")
	public String showTicketFormForAdd(Model model) {
		Ticket tickets = new Ticket();
		model.addAttribute("tickets", tickets);
		model.addAttribute("enableSubmit", true);
		model.addAttribute("type", "new");
		return "tickets/ticket-form";
	}

	@PostMapping("/saveTicket")
	public String saveTicket(Model model, @ModelAttribute("ticket") Ticket ticket) {
		ticketService.save(ticket);
		return "redirect:/tickets/list?success";
	}

	@GetMapping("/delete/{id}")
	public String delete(Model model, @PathVariable int id) {
		ticketService.deleteById(id);
		return "redirect:/tickets/list?del";
	}

	@GetMapping("/showTicketFormForEdit/{id}")
	public String showTicketFormForEdit(Model model, @PathVariable int id) {
		Ticket ticket = ticketService.findById(id);
		model.addAttribute("tickets", ticket);
		model.addAttribute("enableSubmit", true);
		model.addAttribute("type", "edit");
		return "tickets/ticket-form";
	}

	@GetMapping("/searchTicket/{expression}")
	public String searchTicket(Model model, @RequestParam String expression) {
		if (expression == "")
			return "redirect:/tickets/list";
		List<Ticket> tickets = ticketService.filter(expression);
		model.addAttribute("tickets", tickets);
		return "tickets/list-tickets";
	}

	@GetMapping("/showTicketFormForView/{id}")
	public String showTicketFormForView(Model model, @PathVariable int id) {
		Ticket ticket = ticketService.findById(id);
		model.addAttribute("tickets", ticket);
		model.addAttribute("enableSubmit", false);
		model.addAttribute("type", "view");
		return "tickets/ticket-form";
	}

}
