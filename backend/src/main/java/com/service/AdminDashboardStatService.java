package com.service;

import org.springframework.stereotype.Service;

import com.dto.AdminDashboardStatsDto;
import com.repository.AnnouncementRepository;
import com.repository.ArtworkRepository;
import com.repository.UserManagementRepository;

@Service
public class AdminDashboardStatService {
    
    private final UserManagementRepository userRepo;
    private final ArtworkRepository artworkRepo;
    private final AnnouncementRepository announcementRepo;

    public AdminDashboardStatService(UserManagementRepository userRepo, ArtworkRepository artworkRepo, AnnouncementRepository announcementRepo) {
        this.userRepo = userRepo;
        this.artworkRepo = artworkRepo;
        this.announcementRepo = announcementRepo;
    }

    public AdminDashboardStatsDto getStats(){
        long totalUsers = userRepo.count();
        System.out.println("Total Users: " + totalUsers);
        long totalArtworks = artworkRepo.count();
        System.out.println("Total Artworks: " + totalArtworks);
        long totalAnnouncements = announcementRepo.count();
        return new AdminDashboardStatsDto(totalUsers, totalArtworks, totalAnnouncements);
    }


    
    
}
