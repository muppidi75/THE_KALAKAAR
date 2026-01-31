package com.controller;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Entity.Artwork;
import com.service.ArtworkService;


@RestController
@RequestMapping("/api/admin/artworks")
@CrossOrigin(origins="http://localhost:5173")
public class AdminArtworkController {

  private final ArtworkService service;

  public AdminArtworkController(ArtworkService service){
    this.service = service;
  }

  @GetMapping
  public List<Artwork> getAll(){
    return service.getAll();
  }

  @PutMapping("/{id}")
  public Artwork update(@PathVariable Long id,
                         @RequestBody Artwork art){
    return service.update(id, art);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id){
    service.delete(id);
  }
}
