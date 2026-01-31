package com.dto;

public class FeedbackViewDto {

    private Integer rating;
    private String message;

    // ✅ REQUIRED constructor for JPQL
    public FeedbackViewDto(Integer rating, String message) {
        this.rating = rating;
        this.message = message;
    }

    // ✅ No-arg constructor (optional but good)
    public FeedbackViewDto() {
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
