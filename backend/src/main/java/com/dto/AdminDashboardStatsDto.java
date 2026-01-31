package com.dto;

import lombok.Data;

@Data
public class AdminDashboardStatsDto {
    
    private Long totalArtworks;
    private Long totalUsers;
    private Long totalAnnouncements;

    public AdminDashboardStatsDto(Long totalUsers, Long totalArtworks, Long totalAnnouncements) {
        this.totalUsers = totalUsers;
         this.totalArtworks = totalArtworks;
        this.totalAnnouncements = totalAnnouncements;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public long getTotalArtworks() {
        return totalArtworks;
    }

    public long getTotalAnnouncements() {
        return totalAnnouncements;
    }

    
}
