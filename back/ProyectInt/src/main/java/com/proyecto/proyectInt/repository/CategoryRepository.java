package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {

    @Query("SELECT c FROM Category c WHERE c.title = ?1")
    Optional<Category> findByTitle (String  title);
}
