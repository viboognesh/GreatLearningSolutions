package com.assignment.gl.employeemanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.assignment.gl.employeemanagementsystem.model.Employee;
import com.assignment.gl.employeemanagementsystem.service.EmployeeService;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	EmployeeService employeeservice;

	@GetMapping("/list")
	public String findAll(Model model) {
		List<Employee> employee = employeeservice.findAll();
		model.addAttribute("employees", employee);
		return "employees/list-employees";
	}

	@GetMapping("/delete/{id}")
	public String delete(Model model, @PathVariable int id) {
		employeeservice.deleteById(id);
		return "redirect:/employees/list?del";
	}

	@GetMapping("/showEmployeeFormForAdd")
	public String showEmployeeFormForAdd(Model model) {
		Employee employees = new Employee();
		model.addAttribute("employees", employees);
		model.addAttribute("type", "new");
		return "employees/employee-form";
	}

	@PostMapping("/saveEmployee")
	public String saveTicket(Model model, @ModelAttribute("employee") Employee employee) {
		employeeservice.save(employee);
		return "redirect:/employees/list?success";
	}

	@GetMapping("/showEmployeeFormForUpdate/{id}")
	public String showEmployeeFormForUpdate(Model model, @PathVariable int id) {
		Employee employee = employeeservice.findByID(id);
		model.addAttribute("employees", employee);
		model.addAttribute("type", "update");
		return "employees/employee-form";
	}
}
