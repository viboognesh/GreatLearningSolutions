package com.assignment.gl.employeemanagementsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.gl.employeemanagementsystem.dao.EmployeeDao;
import com.assignment.gl.employeemanagementsystem.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeDao employeedao;

	@Override
	public List<Employee> findAll() {

		return employeedao.findAll();
	}

	@Override
	public Employee findByID(int id) {

		Optional<Employee> result = employeedao.findById(id);
		Employee employee = null;
		if (result.isPresent())
			employee = result.get();
		else
			throw new RuntimeException("Employee is not present");
		return employee;
	}

	@Override
	public void save(Employee employee) {

		employeedao.save(employee);
	}

	@Override
	public void deleteById(int id) {

		employeedao.deleteById(id);

	}

}
