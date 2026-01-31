package com.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Entity.*;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    
     Announcement findTopByOrderByCreatedAtDesc();
}
