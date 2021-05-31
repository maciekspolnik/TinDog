package com.example.demo;

import com.example.demo.model.Logs;
import com.example.demo.model.UserDetails;
import com.example.demo.model.Users;
import com.example.demo.repository.LogsRepository;
import com.example.demo.repository.UserDataRepository;
import com.example.demo.repository.UserRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.Inet4Address;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Autowired
	private LogsRepository logsRepository;

	@Autowired
	private UserDataRepository userDataRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		Date curr_date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		this.logsRepository.save(new Logs(formatter.format(curr_date),Inet4Address.getLocalHost().toString(),"Success"));


/*		long index = 1;
		Users user = new Users();
		Users temp = new Users(userRepository.findById((1L)).get());
		UserDetails temp2 = new UserDetails();
		temp2.setOwner("Snifi");
		temp2.setDog_name("Azor");
		temp2.setContact("facebook");
		temp2.setImg_url("#");
		temp2.setUsers(temp);
		temp.setUserDetails(temp2);
		userRepository.save(temp);
*/




	}
}
