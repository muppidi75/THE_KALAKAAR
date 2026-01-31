package com.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.Entity.Artwork;


public interface UserCollections extends JpaRepository<Artwork, Long> {

}
