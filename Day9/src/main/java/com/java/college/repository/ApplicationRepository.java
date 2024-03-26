package com.java.college.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.college.model.Application;

public interface ApplicationRepository extends JpaRepository<Application,String>{
    
}
