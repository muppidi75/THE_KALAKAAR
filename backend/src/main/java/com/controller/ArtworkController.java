package com.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Entity.Artwork;
import com.repository.ArtworkRepository;
import com.service.CloudinaryService;

@RestController
@RequestMapping("/api/admin/artworks")
public class ArtworkController {

    private final CloudinaryService cloudinaryService;
    private final ArtworkRepository artworkRepo;

    public ArtworkController(
            CloudinaryService cloudinaryService,
            ArtworkRepository artworkRepo) {
        this.cloudinaryService = cloudinaryService;
        this.artworkRepo = artworkRepo;
    }

    @PostMapping("/upload")
    public Artwork uploadArtwork(
            @RequestParam("file") MultipartFile file,
            @RequestParam String title,
            @RequestParam String description
    ) {

        String imageUrl = cloudinaryService.upload(file);

        Artwork art = new Artwork();
        art.setTitle(title);
        art.setDescription(description);
        art.setImageUrl(imageUrl);

        return artworkRepo.save(art);
    }
}
