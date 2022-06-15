package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeatureRepository extends JpaRepository<Feature,Long> {

    @Query("SELECT f FROM Feature WHERE f.name = :name;")
    Optional<Feature> findByName (String name);

    @Query("SELECT f FROM Feature WHERE f.id is null;")
    Optional<Feature> deleteNullID ();
}

