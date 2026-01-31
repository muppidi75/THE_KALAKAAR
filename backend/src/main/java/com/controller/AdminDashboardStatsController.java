package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.AdminDashboardStatsDto;
import com.service.AdminDashboardStatService;

@RestController
@RequestMapping("/api/admin/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminDashboardStatsController {

    private final AdminDashboardStatService adminDashboardStatService;

    public AdminDashboardStatsController(AdminDashboardStatService adminDashboardStatService) {
        this.adminDashboardStatService = adminDashboardStatService;
    }

      @GetMapping("/stats")
    public AdminDashboardStatsDto getStats() {
        return adminDashboardStatService.getStats();
    }
     

}
