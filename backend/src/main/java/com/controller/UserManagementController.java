package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.modules.user.entity.User;

import com.service.UserManagementService;


@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class UserManagementController {

    private final UserManagementService userService;
    public UserManagementController(UserManagementService userService) {
        this.userService = userService;
    }

      @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
}
