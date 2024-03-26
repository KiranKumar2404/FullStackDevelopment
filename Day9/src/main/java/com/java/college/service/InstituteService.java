package com.java.college.service;

import com.java.college.model.Institutes;

import java.util.List;

public interface InstituteService {
    Institutes createInstitute(Institutes institute);

    Institutes getInstituteById(String instituteId);

    Institutes updateInstitute(String instituteId, Institutes instituteDetails);

    boolean deleteInstitute(String instituteId);

    List<Institutes> getAllInstitutes();
}