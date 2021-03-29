package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Jan","Kowalski","facebook.com/jankowal"));
		this.userRepository.save(new User("Hanka","Mostowiak","+48555000222"));
		this.userRepository.save(new User("Maciej","Spólnik","mspolnik@gmail.com"));
		this.userRepository.save(new User("Szymon","Koniak","instagram.com/szkoniak"));
		this.userRepository.save(new User("Krystian","Bogoda","hellothere@gmail.com"));
	}
}
