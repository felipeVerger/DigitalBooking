package com.proyecto.proyectInt.repository;
import com.proyecto.proyectInt.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {

    Optional<Image> findByTitle (String title);
}