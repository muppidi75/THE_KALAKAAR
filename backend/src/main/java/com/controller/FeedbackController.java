package com.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.dto.FeedbackDto;
import com.service.FeedbackService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")


public class FeedbackController {

private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/contact")
    public ResponseEntity<?> submitContact(@RequestBody FeedbackDto request) {
        feedbackService.saveMessage(request);
        return ResponseEntity.ok("Message received!");
    }

    @GetMapping("/canvas/feedback")
   public ResponseEntity<?> getRecentFeedback() {
    return ResponseEntity.ok(feedbackService.getRecentFeedback());
   }


      @GetMapping("/canvas/recentFeedback")
   public ResponseEntity<?> getRecentCanvasFeedback() {
    return ResponseEntity.ok(feedbackService. getRecentCanvasFeedback());
}

}
