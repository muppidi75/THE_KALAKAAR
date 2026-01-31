package com.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Entity.Announcement;
import com.repository.AnnouncementRepository;

@Service
public class AnnouncementService {
       private final AnnouncementRepository repo;

    public AnnouncementService(AnnouncementRepository repo) {
        this.repo = repo;
    }

    public Announcement create(String message) {
        Announcement a = new Announcement();
        a.setMessage(message);
        a.setCreatedAt(LocalDateTime.now());
        return repo.save(a);
    }

    public List<Announcement> getAll() {
        return repo.findAll();
    }

    public Announcement getLatestAnnouncement() {
    return repo.findTopByOrderByCreatedAtDesc();
}
}
