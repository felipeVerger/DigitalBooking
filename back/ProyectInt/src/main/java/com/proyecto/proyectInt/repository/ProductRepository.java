package com.proyecto.proyectInt.repository;
import com.proyecto.proyectInt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Optional<Product> findProductByProductName(String name);

    @Query("SELECT CONCAT(p.city.name,', ',p.city.country) FROM Product p GROUP BY p.city.name")
    Optional<List<String>> getLocations();

    @Query("SELECT p FROM Product p WHERE p.category.title = ?1")
    Optional<List<Product>> getProductsByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.score = ?1")
    Optional<List<Product>> filterByScore(int score);

}


