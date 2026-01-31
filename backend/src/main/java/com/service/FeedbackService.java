package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Entity.FeedbackEntity;
import com.dto.CanvasFeedbackView;
import com.dto.FeedbackDto;
import com.dto.FeedbackViewDto;
import com.repository.FeedbackRepository;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public void saveMessage(FeedbackDto request) {
        FeedbackEntity message = new FeedbackEntity();
        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setMessage(request.getMessage());
        message.setRating(request.getRating());

        feedbackRepository.save(message);
    }

    public List<FeedbackViewDto> getRecentFeedback() {
        return feedbackRepository.getRecentFeedback();
    }

     public List<CanvasFeedbackView> getRecentCanvasFeedback() {
        return feedbackRepository.getRecentCanvasFeedback();
    }   
}
