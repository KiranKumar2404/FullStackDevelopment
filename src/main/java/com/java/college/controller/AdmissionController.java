package com.java.college.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import com.java.college.model.Admission;
import com.java.college.service.AdmissionService;

import java.util.List;

@RestController
@RequestMapping("/college/api/v1/admissions")
public class AdmissionController {
    @Autowired
    private AdmissionService admissionService;

    @GetMapping
    public List<Admission> getAllAdmissions() {
        return admissionService.getAllAdmissions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admission> getAdmissionById(@PathVariable Long id) {
        Admission admission = admissionService.getAdmissionById(id);
        if (admission != null) {
            return ResponseEntity.ok(admission);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Admission createAdmission(@RequestBody Admission admission) {
        return admissionService.createAdmission(admission);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admission> updateAdmission(@PathVariable Long id, @RequestBody Admission admissionDetails) {
        Admission updatedAdmission = admissionService.updateAdmission(id, admissionDetails);
        if (updatedAdmission != null) {
            return ResponseEntity.ok(updatedAdmission);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmission(@PathVariable Long id) {
        admissionService.deleteAdmission(id);
        return ResponseEntity.noContent().build();
    }
}