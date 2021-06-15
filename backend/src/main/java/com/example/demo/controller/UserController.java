package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.repository.MatchesRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repository.UserRepository;

import java.util.*;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDataRepository userDataRepository;

    @Autowired
    private MatchesRepository matchesRepository;

    @Autowired
    private RoleRepository roleRepository;

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
        Set<Role> roles = new HashSet<>();
        roles.add(roleRepository.findByName(ERole.ROLE_USER).get());
        temp.setRoles(roles);
        temp2.setId(details.getId());
        temp2.setOwner(details.getOwner());
        temp2.setDog_name(details.getDog_name());
        temp2.setContact(details.getContact());
        temp2.setImg_url(details.getImg_url());
        userDataRepository.deleteById(temp.getUserDetails().getId());
        temp2.setUser(temp);
        temp.setUserDetails(temp2);
        return userRepository.save(temp);
    }

    @GetMapping("/list")
    @PreAuthorize("hasRole('USER')")
    public Iterable<UserDetails> getListOfMatched(@RequestParam Long index){
        Iterable<Matches> data = matchesRepository.findMatchesByIdMatching(index);
        Set<Long> list = new HashSet<>();
        System.out.println(list);
        for(Matches o :data){
            list.add(o.getIdMatched());
        }
        Set<UserDetails> users = new HashSet<>();
        for(Long iter: list){
            users.add(userDataRepository.findUserDetailsByUserId(iter).get());
        }
        System.out.println(users);
        return users;

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
    @PreAuthorize("hasRole('USER')")
    public Users updateUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('USER')")
    public void deleteUser(@RequestParam Long index){
        userRepository.deleteById(index);
    }
}


