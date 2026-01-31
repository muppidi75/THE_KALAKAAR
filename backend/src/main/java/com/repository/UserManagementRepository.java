package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.modules.user.entity.User;

public interface UserManagementRepository extends JpaRepository<User, Long> {
    
}
