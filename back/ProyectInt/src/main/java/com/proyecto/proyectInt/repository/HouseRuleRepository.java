package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.HouseRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRuleRepository extends JpaRepository<HouseRule,Long> {
}
