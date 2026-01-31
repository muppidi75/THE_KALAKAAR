package com.modules.auth.service;

import com.enums.Role;
import com.modules.auth.dto.*;
import com.modules.user.entity.User;
import com.modules.user.repository.UserRepository;
import com.security.JWTService;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JWTService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already exists!";
        }

        Role role = (request.getRole() == null) ? Role.USER : request.getRole();

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(role)
                .build();

        userRepository.save(user);
        return "User Registered Successfully!";
    }

    public AuthResponse login(LoginRequest request) {
         User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED, "Invalid email or password"
            ));

    boolean ok = passwordEncoder.matches(request.getPassword(), user.getPassword());

    if (!ok) {
        throw new ResponseStatusException(
                HttpStatus.UNAUTHORIZED, "Invalid email or password"
        );
    }

    String token = jwtService.generateToken(user.getEmail(), user.getRole().name());

    return AuthResponse.builder()
            .token(token)
            .name(user.getName())
            .email(user.getEmail())
            .role(user.getRole().name())
            .build();
    }
}
