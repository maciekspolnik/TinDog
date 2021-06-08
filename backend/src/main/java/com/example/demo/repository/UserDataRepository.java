package com.example.demo.repository;

import com.example.demo.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDataRepository extends JpaRepository<UserDetails, Long> {

    public Optional<UserDetails> findUserDetailsByUserId(Long usersId);

}