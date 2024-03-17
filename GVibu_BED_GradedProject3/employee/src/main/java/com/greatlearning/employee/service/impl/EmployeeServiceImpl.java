// package net.javaguides.sms.service.impl;
package com.greatlearning.employee.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

// import net.javaguides.sms.entity.Student;
// import net.javaguides.sms.repository.StudentRepository;
// import net.javaguides.sms.service.StudentService;

import com.greatlearning.employee.entity.Employee;
import com.greatlearning.employee.repository.EmployeeRepository;
import com.greatlearning.employee.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;

	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee saveEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public Employee getEmployeeById(Long id) {
		return employeeRepository.findById(id).get();
	}

	@Override
	public Employee updateEmployee(Employee student) {
		return employeeRepository.save(student);
	}

	@Override
	public void deleteEmployeeById(Long id) {
		employeeRepository.deleteById(id);
	}

}
