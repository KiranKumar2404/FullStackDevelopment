package com.java.college.service.impl;

import com.java.college.model.Student;
import com.java.college.repository.StudentRepository;
import com.java.college.service.StudentService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student getStudentById(String userId) {
        Optional<Student> optionalStudent = studentRepository.findById(userId);
        return optionalStudent.orElse(null);
    }

    @Override
    public Student updateStudent(String userId, Student studentDetails) {
        Optional<Student> optionalStudent = studentRepository.findById(userId);
        if (optionalStudent.isPresent()) {
            Student existingStudent = optionalStudent.get();
            // existingStudent.setName(studentDetails.getName());
            existingStudent.setFatherName(studentDetails.getFatherName());
            existingStudent.setMotherName(studentDetails.getMotherName());
            existingStudent.setGender(studentDetails.getGender());
            existingStudent.setNationality(studentDetails.getNationality());
            existingStudent.setDateOfBirth(studentDetails.getDateOfBirth());
            existingStudent.setSrole(studentDetails.getSrole());
            existingStudent.setAddress(studentDetails.getAddress());
            // existingStudent.setMobileNumber(studentDetails.getMobileNumber());
            existingStudent.setMarkSSLC(studentDetails.getMarkSSLC());
            existingStudent.setMarkHSC(studentDetails.getMarkHSC());
            existingStudent.setMarkDiploma(studentDetails.getMarkDiploma());
            return studentRepository.save(existingStudent);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteStudent(String userId) {
        Optional<Student> optionalStudent = studentRepository.findById(userId);
        if (optionalStudent.isPresent()) {
            studentRepository.deleteById(userId);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}