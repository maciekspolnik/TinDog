package com.example.demo.repository;

import com.example.demo.model.UserData;
import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {

}