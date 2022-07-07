package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail (String email);


    Boolean existsByEmail(@Param("email")String email);

}
