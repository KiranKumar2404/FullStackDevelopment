package com.java.college.model;

// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// import jakarta.persistence.CascadeType;

// import jakarta.persistence.Column;

// import java.util.HashSet;
// import java.util.Set;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="institutes")
public class Institutes {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String instituteId;
    private String instituteName;
    private String location;
    private String contactNumber;
    private String instituteEmail;
    private String courses;
}
