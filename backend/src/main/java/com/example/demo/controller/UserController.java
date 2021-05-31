package com.example.demo.controller;

import com.example.demo.model.UserDetails;
import com.example.demo.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.Users;

import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/test")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDataRepository userDataRepository;

    @GetMapping("/all")
    public Iterable<Users> getAllUsers(){
        return userRepository.findAll();
}

    @GetMapping("/user")
    public Optional<Users> getUsersByID(@RequestParam Long index){
        return userRepository.findById(index);
    }

    @GetMapping("/email")
    public Optional<Users> getUsersByEmail(@RequestParam String email) {
        return userRepository.findByEmail(email); }

    @PostMapping("/")
    public Users addUser(@RequestBody Users user) {
        return  userRepository.save(user);
    }

    @PostMapping("/details")
    public Users addDetails(@RequestParam Long index,@RequestBody UserDetails details) {
        Users temp = new Users(userRepository.findById((index)).get());
        UserDetails temp2 = new UserDetails();
        temp2.setOwner(details.getOwner());
        temp2.setDog_name(details.getDog_name());
        temp2.setContact(details.getContact());
        temp2.setImg_url(details.getImg_url());
        temp2.setUsers(temp);
        temp.setUserDetails(temp2);
        return userRepository.save(temp);
    }

    @GetMapping("/idetails")
    public Optional<UserDetails> getDetailsById(@RequestParam Long index){
        return userDataRepository.findById(index);
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


