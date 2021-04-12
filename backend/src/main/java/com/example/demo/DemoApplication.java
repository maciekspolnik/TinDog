package com.example.demo;

import com.example.demo.model.Logs;
import com.example.demo.model.User;
import com.example.demo.repository.LogsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.Inet4Address;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private LogsRepository logsRepository;

	@Override
	public void run(String... args) throws Exception {
		Date curr_date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		this.logsRepository.save(new Logs(formatter.format(curr_date),Inet4Address.getLocalHost().toString(),"Success"));

	}
}
