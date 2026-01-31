package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Entity.FeedbackEntity;

public interface AdminFeedbackRepository  extends JpaRepository<FeedbackEntity, Long> {
    
}
