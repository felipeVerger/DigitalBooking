package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.City;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CityRepository extends JpaRepository<City,Long> {
    public Optional<City> findByCity(String city);
}
