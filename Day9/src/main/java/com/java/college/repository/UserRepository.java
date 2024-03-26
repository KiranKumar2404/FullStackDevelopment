package com.java.college.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.college.model.User;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
    Optional<User>  findByEmail(String email);

    
} 