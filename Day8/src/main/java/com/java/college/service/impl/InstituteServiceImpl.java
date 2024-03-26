package com.java.college.service.impl;

import com.java.college.model.Institutes;
import com.java.college.repository.InstituteRepository;
import com.java.college.service.InstituteService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteServiceImpl implements InstituteService {

    private final InstituteRepository instituteRepository;

    public InstituteServiceImpl(InstituteRepository instituteRepository) {
        this.instituteRepository = instituteRepository;
    }

    @Override
    public Institutes createInstitute(Institutes institute) {
        Institutes existingInstitute = instituteRepository.findByinstituteName(institute.getInstituteName());
        if (existingInstitute != null) {
            return null; 
        }
        return instituteRepository.save(institute);
    }

    @Override
    public Institutes getInstituteById(String instituteId) {
        Optional<Institutes> optionalInstitute = instituteRepository.findById(instituteId);
        return optionalInstitute.orElse(null);
    }

    @Override
    public Institutes updateInstitute(String instituteId, Institutes instituteDetails) {
        Optional<Institutes> optionalInstitute = instituteRepository.findById(instituteId);
        if (optionalInstitute.isPresent()) {
            Institutes existingInstitute = optionalInstitute.get();
            existingInstitute.setInstituteName(instituteDetails.getInstituteName());
            existingInstitute.setLocation(instituteDetails.getLocation());
            existingInstitute.setContactNumber(instituteDetails.getContactNumber());
            existingInstitute.setInstituteEmail(instituteDetails.getInstituteEmail());
            return instituteRepository.save(existingInstitute);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteInstitute(String instituteId) {
        Optional<Institutes> optionalInstitute = instituteRepository.findById(instituteId);
        if (optionalInstitute.isPresent()) {
            instituteRepository.deleteById(instituteId);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<Institutes> getAllInstitutes() {
        return instituteRepository.findAll();
    }
}