package com.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.Entity.Artwork;
import com.repository.ArtworkRepository;

@Service
public class ArtworkService {

  private final ArtworkRepository repo;

  public ArtworkService(ArtworkRepository repo){
    this.repo = repo;
  }

  public List<Artwork> getAll(){
    return repo.findAll();
  }

  public Artwork save(Artwork art){
    return repo.save(art);
  }

  public void delete(Long id){
    repo.deleteById(id);
  }

  public Artwork update(Long id, Artwork updated){
    Artwork art = repo.findById(id)
        .orElseThrow();

    art.setTitle(updated.getTitle());
    art.setDescription(updated.getDescription());
    art.setImageUrl(updated.getImageUrl());

    return repo.save(art);
  }
}
