package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Entity.FeedbackEntity;
import com.dto.CanvasFeedbackView;
import com.dto.FeedbackViewDto;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long> {
    // No extra method needed, basic save and findAll are available

    @Query("SELECT new com.dto.FeedbackViewDto(f.rating, f.message) FROM FeedbackEntity f ORDER BY f.id DESC LIMIT 3")
    List<FeedbackViewDto> getRecentFeedback();

    @Query("SELECT new com.dto.CanvasFeedbackView(f.name, f.message) FROM FeedbackEntity f ORDER BY f.id DESC LIMIT 3")
    List<CanvasFeedbackView> getRecentCanvasFeedback();

}