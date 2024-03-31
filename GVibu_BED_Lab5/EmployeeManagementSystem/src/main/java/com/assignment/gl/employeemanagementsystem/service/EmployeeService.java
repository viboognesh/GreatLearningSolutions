package com.assignment.gl.employeemanagementsystem.service;

import java.util.List;

import com.assignment.gl.employeemanagementsystem.model.Employee;

public interface EmployeeService {

	public List<Employee> findAll();

	public Employee findByID(int id);

	public void save(Employee employee);

	public void deleteById(int id);

}
