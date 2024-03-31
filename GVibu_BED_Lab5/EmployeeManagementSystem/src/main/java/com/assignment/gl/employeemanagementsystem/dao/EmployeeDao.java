package com.assignment.gl.employeemanagementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.gl.employeemanagementsystem.model.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

}
