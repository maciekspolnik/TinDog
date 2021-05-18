package com.example.demo.manager;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class SecurityManager {
    private UserRepository userRepository;

    public SecurityManager(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean validateEmail(String email){
        return userRepository.findUserByEmail(email).isPresent();
    }

    public boolean login(String email, String password){
        return userRepository.existsByEmailAndPassword(email,password);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public static final Pattern VALID_EMAIL_ADDRESS_SCHEMA =
            Pattern.compile(
                    "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
                    Pattern.CASE_INSENSITIVE);

    public static boolean validate(String email){
        Matcher matcher = VALID_EMAIL_ADDRESS_SCHEMA.matcher(email);
        return matcher.find();
    }

}
