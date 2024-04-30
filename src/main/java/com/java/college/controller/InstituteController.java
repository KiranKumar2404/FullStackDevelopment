package com.java.college.controller;

import com.java.college.model.Institutes;
import com.java.college.service.InstituteService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/college/api/v1/institutes")
@Tag(name = "Institutions", description = "It's used to display the institutions their locations so that the institutions can be choosed by the student")
public class InstituteController {

    private final InstituteService instituteService;

    public InstituteController(InstituteService instituteService) {
        this.instituteService = instituteService;
    }

    @PostMapping("/institute")
    @Operation(summary = "Add new institutions in future", description = "Admins can add the new institutions so that student can get more choices")
    public ResponseEntity<Institutes> createInstitute(@RequestBody Institutes institute) {
        Institutes createdInstitute = instituteService.createInstitute(institute);
        return new ResponseEntity<>(createdInstitute, HttpStatus.CREATED);
    }

    @GetMapping("/{instituteId}")
    @Operation(summary = "Institutions can be filtered", description = "Student's can view the different institutions their location,email and contact number. Students can filter bades on the institutes id")
    public ResponseEntity<Institutes> getInstituteById(@PathVariable("instituteId") String instituteId) {
        Institutes institute = instituteService.getInstituteById(instituteId);
        if (institute != null) {
            return new ResponseEntity<>(institute, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{instituteId}")
    @Operation(summary = "Make changes in existing institutions", description = "Admins can make changes in the institutions if there is any mistakes or if the institute is changed to different location or if the email id or contact number is changed")
    public ResponseEntity<Institutes> updateInstitute(@PathVariable("instituteId") String instituteId, @RequestBody Institutes instituteDetails) {
        Institutes updatedInstitute = instituteService.updateInstitute(instituteId, instituteDetails);
        if (updatedInstitute != null) {
            return new ResponseEntity<>(updatedInstitute, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{instituteId}")
    @Operation(summary = "Delete the institutions", description = "Admins can delete the institutions if the institution is not preferred by any student or the institution is not running or popular")
    public ResponseEntity<HttpStatus> deleteInstitute(@PathVariable("instituteId") String instituteId) {
        boolean deleted = instituteService.deleteInstitute(instituteId);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping
    @Operation(summary = "Institutions displayed", description = "Student's can view the different institutions their location,email and contact number")
    public ResponseEntity<List<Institutes>> getAllInstitutes() {
        List<Institutes> institutes = instituteService.getAllInstitutes();
        return new ResponseEntity<>(institutes, HttpStatus.OK);
    }
}