package com.java.college.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRes {
    private String id;
    private String courseId;
    private String courseName;
    private String fees;
    private String duration;
}
