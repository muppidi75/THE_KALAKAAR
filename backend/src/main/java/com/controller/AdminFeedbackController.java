package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.FeedbackEntity;
import com.service.AdminFeedbackService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminFeedbackController {
     private final AdminFeedbackService feedbackService;

    // ✅ Constructor Injection
    public AdminFeedbackController(AdminFeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/admin/feedback")
public List<FeedbackEntity> getAllFeedback() {
    return feedbackService.getAllFeedback();
}

    
}
