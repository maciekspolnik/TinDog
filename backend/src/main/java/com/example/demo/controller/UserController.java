package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.Users;

import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public Iterable<Users> getAllUsers(){
        return userRepository.findAll();
}

    @GetMapping("/")
    public Optional<Users> getUsersByID(@RequestParam Long index){
        return userRepository.findById(index);
    }

    @GetMapping("/email")
    public Optional<Users> getUsersByEmail(@RequestParam String email) { return userRepository.findByEmail(email); }

    @PostMapping("/")
    public Users addUser(@RequestBody Users user) {
        return  userRepository.save(user);
    }

    @PutMapping
    public Users updateUser(@RequestBody Users user) {
        return  userRepository.save(user);
    }

    @DeleteMapping
    public void deleteUser(@RequestParam Long index){
        userRepository.deleteById(index);
    }
}


