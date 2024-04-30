package com.java.college.repository;

import com.java.college.model.Institutes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituteRepository extends JpaRepository<Institutes, String> {

}
