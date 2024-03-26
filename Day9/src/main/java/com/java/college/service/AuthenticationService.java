package com.java.college.service;

import com.java.college.dto.Request.ForgotPasswordRequest;
import com.java.college.dto.Request.LoginRequest;
import com.java.college.dto.Request.RegisterRequest;
import com.java.college.dto.Response.BasicResponse;
import com.java.college.dto.Response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
}
