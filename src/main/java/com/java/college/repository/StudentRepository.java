package com.java.college.repository;

import com.java.college.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    // @Query("SELECT s FROM Student s JOIN FETCH s.user WHERE s.userId = :userId")
    // Student findStudentWithUserById(@Param("userId") String userId);
}

