package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.repository.FeedbackRepository;
import com.Entity.FeedbackEntity;

@Service
public class AdminFeedbackService {

     private final FeedbackRepository repo;

    public AdminFeedbackService(FeedbackRepository repo) {
        this.repo = repo;
    }

    public List<FeedbackEntity> getAllFeedback() {
        return repo.findAll();
    }
    
}
