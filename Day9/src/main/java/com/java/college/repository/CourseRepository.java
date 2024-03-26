package com.java.college.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.college.model.Course;

public interface CourseRepository extends JpaRepository<Course,String>{
    
}
