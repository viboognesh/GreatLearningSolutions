package com.groupassignment.gl.tickettrackerapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groupassignment.gl.tickettrackerapp.model.Ticket;

public interface TicketDao extends JpaRepository<Ticket, Integer> {

}
