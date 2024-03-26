package com.java.college.service;

import com.java.college.model.Student;

import java.util.List;

public interface StudentService {
    Student createStudent(Student student);

    Student getStudentById(String userId);

    Student updateStudent(String userId, Student studentDetails);

    boolean deleteStudent(String userId);

    List<Student> getAllStudents();
}