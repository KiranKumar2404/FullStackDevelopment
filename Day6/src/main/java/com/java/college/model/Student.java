package com.java.college.model;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class Student {

    // @JsonIgnore
    @OneToOne
    @JoinColumn(name = "id")
    private User user;
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;
    private String fatherName;

    @Column(nullable = false)
    private String motherName;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false)
    private String dateOfBirth;

    @Column(nullable = false)
    private String srole;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String markSSLC;

    @Column(nullable = false)
    private String markHSC;

    @Column(nullable = false)
    private String markDiploma;
}