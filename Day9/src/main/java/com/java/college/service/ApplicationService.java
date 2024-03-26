package com.java.college.service;

import com.java.college.model.Application;
import com.java.college.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Optional<Application> getApplicationById(String appId) {
        return applicationRepository.findById(appId);
    }

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public Application updateApplication(String appId, Application applicationDetails) {
        Application application = applicationRepository.findById(appId)
                .orElseThrow(() -> new RuntimeException("Application not found with id: " + appId));

        // application.setUser(applicationDetails.getUser());
        // application.setCourse(applicationDetails.getCourse());
        // application.setInstitutes(applicationDetails.getInstitutes());
        application.setStatus(applicationDetails.getStatus());

        return applicationRepository.save(application);
    }

    public void deleteApplication(String appId) {
        applicationRepository.deleteById(appId);
    }
}
