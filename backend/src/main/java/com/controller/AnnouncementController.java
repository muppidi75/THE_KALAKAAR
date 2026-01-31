package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Announcement;
import com.service.AnnouncementService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AnnouncementController {

      private final AnnouncementService service;

    public AnnouncementController(AnnouncementService service) {
        this.service = service;
    }

    // ADMIN -> create
    @PostMapping("/admin/announcements")
    public Announcement create(@RequestBody String message) {
        return service.create(message);
    }

    // ADMIN -> fetch
    @GetMapping("/admin/all-announcements")
    public List<Announcement> getAll() {
        return service.getAll();
    }
  // USER -> fetch only top one latest announcement
    @GetMapping("/user/latest-announcement")
public Announcement getLatestAnnouncement() {
    return service.getLatestAnnouncement();
}

    
}
