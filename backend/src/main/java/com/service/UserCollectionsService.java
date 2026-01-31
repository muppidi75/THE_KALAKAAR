package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Entity.Artwork;
import com.repository.ArtworkRepository;

@Service
public class UserCollectionsService {
     private final ArtworkRepository repo;

    public UserCollectionsService(ArtworkRepository repo) {
        this.repo = repo;
    }

    public List<Artwork> getAllArtworks() {
        return repo.findAll();
    }

    public Artwork saveArtwork(Artwork artwork) {
        return repo.save(artwork);
    }

}
