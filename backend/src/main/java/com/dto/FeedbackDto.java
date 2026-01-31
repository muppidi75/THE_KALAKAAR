package com.dto;

import lombok.Data;

@Data
public class FeedbackDto {
    private String name;
    private String email;
    private String message;
    private Integer rating;
}
