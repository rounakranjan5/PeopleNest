package com.peoplenest.backend.service;

import com.peoplenest.backend.dto.SignupRequest;
import com.peoplenest.backend.dto.SignupResponse;
import com.peoplenest.backend.entity.User;
import com.peoplenest.backend.enums.Providers;
import com.peoplenest.backend.exception.EmailAlreadyExistsException;
import com.peoplenest.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public SignupResponse signup(SignupRequest request) {
        String email = request.getEmail().trim().toLowerCase();
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new EmailAlreadyExistsException();
        }

        User user = User.builder()
                .userId(UUID.randomUUID().toString())
                .username(request.getName().trim())
                .email(email)
                .password(passwordEncoder.encode(request.getPassword()))
                .enabled(true)
                .provider(Providers.SELF)
                .build();

        User savedUser = userRepository.save(user);
        return new SignupResponse(savedUser.getUserId(), savedUser.getUsername(), savedUser.getEmail());
    }
}
