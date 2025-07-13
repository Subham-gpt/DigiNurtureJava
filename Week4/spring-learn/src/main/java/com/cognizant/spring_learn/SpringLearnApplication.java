package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication combines:
// @Configuration, @EnableAutoConfiguration, and @ComponentScan annotations.
@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		System.out.println("Starting SpringLearnApplication...");
		SpringApplication.run(SpringLearnApplication.class, args);
		System.out.println("SpringLearnApplication started successfully.");
	}
}
