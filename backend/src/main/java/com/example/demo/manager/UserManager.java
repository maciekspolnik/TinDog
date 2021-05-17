package com.example.demo.manager;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserManager {

    private UserRepository userRepository;

    @Autowired
    public UserManager(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> findByID(Long id){
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) { return userRepository.findUserByEmail(email); }

    public Iterable<User> findAll(){
        return userRepository.findAll();
    }

    public User save(User user){ return userRepository.save(user); }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

}
