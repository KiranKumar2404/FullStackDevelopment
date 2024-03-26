package com.java.college.controller;

import com.java.college.model.Application;
import com.java.college.service.ApplicationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/college/api/v1/applications")
@Tag(name = "Application Status", description = "It's used to view the application status")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    @Operation(summary = "Get the application from student", description = "Student can view the application status and the course they have choosed")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    // @GetMapping("/{appId}")
    // @Operation(summary = "", description = "Admins can add the new institutions so that student can get more choices")
    // public Application getApplicationById(@PathVariable String appId) {
    //     return applicationService.getApplicationById(appId)
    //             .orElseThrow(() -> new RuntimeException("Application not found with id: " + appId));
    // }

    @PostMapping
    @Operation(summary = "Submit the application form", description = "Students can submit the appliaction form with thier name and course name")
    public Application createApplication(@RequestBody Application application) {
        return applicationService.createApplication(application);
    }

    @PutMapping("/{appId}")
    @Operation(summary = "Edit the appliaction", description = "Admins can edit the form if there is any mistake in their name or course")
    public Application updateApplication(@PathVariable String appId, @RequestBody Application applicationDetails) {
        return applicationService.updateApplication(appId, applicationDetails);
    }

    @DeleteMapping("/{appId}")
    @Operation(summary = "Delete the application", description = "Admins can delete the application if the student does not want it")
    public void deleteApplication(@PathVariable String appId) {
        applicationService.deleteApplication(appId);
    }
}
