package com.java.college.model;

import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// import java.util.HashSet;
// import java.util.Set;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
// import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToOne;
// import jakarta.persistence.OneToMany;
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
@Table(name="course")
public class Course {
    // @JsonIgnore
    @OneToOne
    @JoinColumn(name = "id")
    private User user;
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String courseId;
    private String courseName;
    private String fees;
    private String duration;

    
    @ManyToMany(mappedBy = "courses")
    private List<Institutes> institutes;
}