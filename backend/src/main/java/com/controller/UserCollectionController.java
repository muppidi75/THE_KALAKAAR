package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Artwork;
import com.service.UserCollectionsService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserCollectionController {

    private final UserCollectionsService service;

    public UserCollectionController(UserCollectionsService service) {
         this.service = service;
    }

     @GetMapping("/collections")
    public List<Artwork> getCollections() {
        return service.getAllArtworks();
    }


}
