package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.HealthHygiene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthHygieneRepository extends JpaRepository<HealthHygiene, Long> {
}
