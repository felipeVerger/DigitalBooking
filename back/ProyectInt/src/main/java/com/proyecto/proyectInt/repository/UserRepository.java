package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.User;
import com.proyecto.proyectInt.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional( readOnly = true ) // No se puede hacer una transaccion en el repositorio
public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail (String email);

    @Query("SELECT u FROM users u WHERE :role = u.role")
    Optional<User> filterByUseRole (UserRole userRole);


    @Query("SELECT DISTINCT role FROM users")
    Optional<User> showRoles ();

    @Query("SELECT role FROM users u where :name = u.name")
    Optional<User> showUserRole (String username);


}
