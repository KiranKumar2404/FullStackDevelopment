package com.java.college.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.college.dto.Request.ForgotPasswordRequest;
import com.java.college.dto.Request.LoginRequest;
import com.java.college.dto.Request.RegisterRequest;
import com.java.college.dto.Response.BasicResponse;
import com.java.college.dto.Response.LoginResponse;
import com.java.college.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/college/api/v1/auth")
@Tag(name = "Authentication", description = "It's used to authenticate and authorize the user.")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary = "User Registration", description = "For the registration process I collect user credentials such as emal,name, password and mobile number.")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);

        }

    }

    @PostMapping("/login")
    @Operation(summary = "User authentiaction", description = "Upon successful authentication using user credentials (email and password) a JSON Token will be generated")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        BasicResponse<LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            response.setMessage("Something went wrong");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/forgot-password")
    @Operation(summary = "Reset user password", description = "User can reset their password if they dont' remember the current password the mail will be sent to their registered email id")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
