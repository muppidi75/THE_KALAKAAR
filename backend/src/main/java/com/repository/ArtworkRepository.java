package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Entity.Artwork;

public interface ArtworkRepository extends JpaRepository<Artwork, Long> {
    
}
