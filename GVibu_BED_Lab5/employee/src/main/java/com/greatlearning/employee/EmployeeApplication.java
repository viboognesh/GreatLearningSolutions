package com.greatlearning.employee;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// import com.greatlearning.employee.entity.Employee;
// import com.greatlearning.employee.repository.EmployeeRepository;

// @SpringBootApplication
// public class EmployeeApplication implements CommandLineRunner {

// 	public static void main(String[] args) {
// 		SpringApplication.run(EmployeeApplication.class, args);
// 	}

// 	@Autowired
// 	private EmployeeRepository employeeRepository;

// 	@Override
// 	public void run(String... args) throws Exception {
// 		/*
// 		 * Student student1 = new Student("Ramesh", "Fadatare", "ramesh@gmail.com");
// 		 * employeeRepository.save(student1);
// 		 * 
// 		 * Student student2 = new Student("Sanjay", "Jadhav", "sanjay@gmail.com");
// 		 * employeeRepository.save(student2);
// 		 * 
// 		 * Student student3 = new Student("tony", "stark", "tony@gmail.com");
// 		 * employeeRepository.save(student3);
// 		 */

// 	}

// }
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
// import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
// import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class EmployeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}

	// @Bean
	// public WebMvcConfigurer configurer() {
	// return new WebMvcConfigurerAdapter() {
	// @Override
	// public void addResourceHandlers(ResourceHandlerRegistry registry) {
	// registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	// }

	// @Override
	// public void addViewControllers(ViewControllerRegistry registry) {
	// registry.addViewController("/").setViewName("forward:/employees");
	// }
	// };
	// }
}
