package com.java.college.controller;

import com.java.college.model.Student;
import com.java.college.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/college/api/v1/students")
@Tag(name = "Student Profile", description = "It's used to display the profile of the student so that the changes can be made by the student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    @Operation(summary = "Add new student profile", description = "Admins can add the new student to portal in case there is issue for the student to register")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student createdStudent = studentService.createStudent(student);
        return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    @Operation(summary = "Filter student by id", description = "Admins can filter the students or user based on the id")
    public ResponseEntity<Student> getStudentById(@PathVariable("userId") String userId) {
        Student student = studentService.getStudentById(userId);
        if (student != null) {
            return new ResponseEntity<>(student, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}")
    @Operation(summary = "Edit the profile", description = "Student can make changes in the profile  to update their profile in case of any mistakes or changes")
    public ResponseEntity<Student> updateStudent(@PathVariable("userId") String userId, @RequestBody Student studentDetails) {
        Student updatedStudent = studentService.updateStudent(userId, studentDetails);
        if (updatedStudent != null) {
            return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Delete the student", description = "Admins can delete the student if the student is not using the portal in disciplened manner")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable("userId") String userId) {
        boolean deleted = studentService.deleteStudent(userId);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    @Operation(summary = "View the students", description = "Admins can view the students who have registerd and updated the profile")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
}