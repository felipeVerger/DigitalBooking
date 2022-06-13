package com.proyecto.proyectInt.repository;


import com.proyecto.proyectInt.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<UserRole,Long> {

}
