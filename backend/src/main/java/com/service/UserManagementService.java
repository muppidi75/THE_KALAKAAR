package com.service;

import com.modules.user.repository.UserRepository;
import com.modules.user.entity.User;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserManagementService {

     private final UserRepository userRepo;
    public UserManagementService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    
}
