package com.groupassignment.gl.tickettrackerapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String ticketTitle;
	private String ticketDesc;
	private String content;
	private String ticketCreated;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTicketTitle() {
		return ticketTitle;
	}

	public void setTicketTitle(String ticketTitle) {
		this.ticketTitle = ticketTitle;
	}

	public String getTicketDesc() {
		return ticketDesc;
	}

	public void setTicketDesc(String ticketDesc) {
		this.ticketDesc = ticketDesc;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTicketCreated() {
		return ticketCreated;
	}

	public void setTicketCreated(String ticketCreated) {
		this.ticketCreated = ticketCreated;
	}

	public Ticket(int id, String ticketTitle, String ticketDesc, String content, String ticketCreated) {
		super();
		this.id = id;
		this.ticketTitle = ticketTitle;
		this.ticketDesc = ticketDesc;
		this.content = content;
		this.ticketCreated = ticketCreated;
	}

	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}

}
