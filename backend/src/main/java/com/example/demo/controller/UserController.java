package com.example.demo.controller;

import com.example.demo.model.UserDetails;
import com.example.demo.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.Users;

import java.util.Optional;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/test")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDataRepository userDataRepository;

    @GetMapping("/users/all")
    @PreAuthorize("hasRole('USER')")
    public Iterable<Users> getAllUsers(){
        return userRepository.findAll();
}

    @GetMapping("/users")
    @PreAuthorize("hasRole('USER')")
    public Optional<Users> getUsersByID(@RequestParam Long index){
        return userRepository.findById(index);
    }

    @GetMapping("/users/email")
    @PreAuthorize("hasRole('USER')")
    public Optional<Users> getUsersByEmail(@RequestParam String email) {
        return userRepository.findByEmail(email); }

    @PostMapping("/")
    @PreAuthorize("hasRole('USER')")
    public Users addUser(@RequestBody Users user) {
        return  userRepository.save(user);
    }

    @PostMapping("/details")
    @PreAuthorize("hasRole('USER')")
    public Users addDetails(@RequestParam Long index, @RequestBody UserDetails details) {
        Users temp = new Users(userRepository.findById((index)).get());
        UserDetails temp2 = new UserDetails();
        temp2.setOwner(details.getOwner());
        temp2.setDog_name(details.getDog_name());
        temp2.setContact(details.getContact());
        temp2.setImg_url(details.getImg_url());
        temp2.setUser(temp);
        temp.setUserDetails(temp2);
        return userRepository.save(temp);
    }

    @GetMapping("/idetails")
    @PreAuthorize("hasRole('USER')")
    public Optional<UserDetails> getDetailsByUserId(@RequestParam Long index){
        return userDataRepository.findUserDetailsByUserId(index);
    }

    @GetMapping("/details/all")
    @PreAuthorize("hasRole('USER')")
    public Iterable<UserDetails> getAllUserData(){
        return userDataRepository.findAll();
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


