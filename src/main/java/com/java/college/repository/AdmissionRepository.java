package com.java.college.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.college.model.Admission;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission,Long> {
    
}