package com.java.college.controller;

import com.java.college.model.Course;
import com.java.college.service.CourseService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/college/api/v1/courses")
@Tag(name = "Departments", description = "It's used to provide different departments in different institutions so that student can choose their desired department")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    @Operation(summary = "Department's displayed", description = "Student's can view the department's offered by different institutions")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{courseId}")
    @Operation(summary = "Department's filter", description = "Student's can filter based on the department id and view the department's offered by different institutions")
    public Course getCourseById(@PathVariable String courseId) {
        return courseService.getCourseById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found with id: " + courseId));
    }

    @PostMapping
    @Operation(summary = "Add new departments in future", description = "Admins can add the new departments so that student can get more choices")
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    @PutMapping("/{courseId}")
    @Operation(summary = "Make changes in existing  departments", description = "Admins can make changes in the department if there is any mistakes or if the department is not available in that institute")
    public Course updateCourse(@PathVariable String courseId, @RequestBody Course courseDetails) {
        return courseService.updateCourse(courseId, courseDetails);
    }

    @DeleteMapping("/{courseId}")
    @Operation(summary = "Delete the department", description = "Admins can delete the department if the department is too old and the student are not ready to take that department or if the institute is not offering that department")
    public void deleteCourse(@PathVariable String courseId) {
        courseService.deleteCourse(courseId);
    }
}
