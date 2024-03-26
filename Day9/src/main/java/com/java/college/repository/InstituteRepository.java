package com.java.college.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.college.model.Institutes;

public interface InstituteRepository extends JpaRepository<Institutes,String>{

    Institutes findByinstituteName(String instituteName);
    
}
