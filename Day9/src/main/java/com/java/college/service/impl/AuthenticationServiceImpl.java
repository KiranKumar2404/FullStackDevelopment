package com.java.college.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.college.dto.Request.ForgotPasswordRequest;
import com.java.college.dto.Request.LoginRequest;
import com.java.college.dto.Request.RegisterRequest;
import com.java.college.dto.Response.BasicResponse;
import com.java.college.dto.Response.LoginResponse;
import com.java.college.model.Token;
import com.java.college.model.User;
import com.java.college.repository.TokenRepository;
import com.java.college.repository.UserRepository;
import com.java.college.service.AuthenticationService;
import com.java.college.utils.JwtUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final TokenRepository tokenRepository;

    @Override
    public BasicResponse<String> register(RegisterRequest registerRequest) {
        Optional<User> isUserExists = userRepository.findByEmail(registerRequest.getEmail());
        if (isUserExists.isPresent()) {
            return BasicResponse.<String>builder().message("User already exist" + registerRequest.getEmail()).data("")
                    .build();
        }

        var user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .number(registerRequest.getNumber())
                .password(passwordEncoder.encode(registerRequest.getPassword())).build();
        userRepository.save(user);
        return BasicResponse.<String>builder().message("User Registered Sucessfully").data("").build();
    }

    @Override
    public BasicResponse<LoginResponse> login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        var user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not Found"));
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole().toString());
        var accessToken = jwtUtils.generateToken(claims, user);
        revokeAllUserToken(user);
        saveUserToken(accessToken,user);
        return BasicResponse.<LoginResponse> builder().message("User logged in successsfully")
                                                    .data(LoginResponse.builder().accessToken(accessToken).build())
                                                    .build();
    }

    private void saveUserToken(String accessToken, User user) {
        var token=Token.builder().token(accessToken).user(user).expired(false).revoked(false).build();
        tokenRepository.save(token);
  }

    private void revokeAllUserToken(User user) {
        var validUserTokens=tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(user.getId());
        if(validUserTokens.isEmpty())
        {
            return;
       }
       validUserTokens.forEach(token->{
        token.setExpired(true);
        token.setRevoked(true);
       });
       tokenRepository.saveAll(validUserTokens);
     }

    @Override
    public BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest) {
        var user=userRepository.findByEmail(forgotPasswordRequest.getEmail()).orElseThrow(()->new UsernameNotFoundException("USer not found."));
        if(passwordEncoder.matches(forgotPasswordRequest.getCurrentPassword(), user.getPassword()))
        {
            return BasicResponse.<String>builder().message("Wrong password").data("").build();
        }
        if(forgotPasswordRequest.getNewPassword().equals(forgotPasswordRequest.getConfirmPassword()))
        {
            return BasicResponse.<String>builder().message("Password mismatch").data("").build();
        }
        user.setPassword(passwordEncoder.encode(forgotPasswordRequest.getNewPassword()));
        userRepository.save(user);
        return BasicResponse.<String>builder().message("Password updated successfully").data("").build();
    }

}