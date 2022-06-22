package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional( readOnly = true ) // No se puede hacer una transaccion en el repositorio
public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail (String email);

}
