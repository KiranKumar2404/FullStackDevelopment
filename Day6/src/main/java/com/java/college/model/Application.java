package com.java.college.model;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String app_id;

    // @JsonIgnore
    @OneToOne
    @JoinColumn(name = "id")
    private User user;
    
    // @JsonIgnore
    @OneToOne
    @JoinColumn(name = "courseId")
    private Course course;
    

    @Column(nullable = false)
    private String status;
    
}