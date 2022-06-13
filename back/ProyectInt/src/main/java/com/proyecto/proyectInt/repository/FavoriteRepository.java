package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByUserId(Long id);
    List<Favorite> findByProductId(Long id);
    List<Favorite> findByUserIdAndProductId(Long userId, Long productId);

}
