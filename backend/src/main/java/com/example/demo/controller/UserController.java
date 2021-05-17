package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import com.example.demo.manager.UserManager;
import com.example.demo.model.User;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private UserManager users;

    @Autowired
    public UserController(UserManager users) {
        this.users = users;
    }

    @GetMapping("/all")
    public Iterable<User> getAllUsers(){
        return users.findAll();
}

    @GetMapping("/")
    public Optional<User> getUsersByID(@RequestParam Long index){
        return users.findByID(index);
    }

    @GetMapping("/email")
    public Optional<User> getUsersByEmail(@RequestParam String email) { return users.findByEmail(email); }

    @PostMapping("/")
    public User addUser(@RequestBody User user) {
        return  users.save(user);
    }

    @PutMapping
    public User updateUser(@RequestBody User user) {
        return  users.save(user);
    }

    @DeleteMapping
    public void deleteUser(@RequestParam Long index){
        users.delete(index);
    }
}


