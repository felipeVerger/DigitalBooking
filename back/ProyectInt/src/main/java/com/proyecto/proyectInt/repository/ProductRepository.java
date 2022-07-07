package com.proyecto.proyectInt.repository;
import com.proyecto.proyectInt.model.City;
import com.proyecto.proyectInt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Optional<Product> findProductByProductName(String name);

    @Query("SELECT CONCAT(p.city.name,', ',p.city.country) FROM Product p GROUP BY p.city.name")
    List<String> getLocations();

    @Query("SELECT p FROM Product p WHERE p.category.title = ?1")
    List<Product> getProductsByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.city.name = ?1")
    List<Product> getProductsByCity(String name);

    @Query("SELECT p FROM Product p WHERE p.score = ?1")
    List<Product> filterByScore(int score);

    // SELECT * FROM products p left join reservations r on p.id_product = r.id WHERE (r.id is null AND p.cities_id_city = 2) OR "2021-12-05" < r.check_in AND "2021-12-10" < r.check_in AND p.cities_id_city = 2 OR "2021-12-05" > r.check_out AND "2021-12-10" > r.check_out AND p.cities_id_city = 2;
    //      ".ciudad.id WHERE ?1 < r.fechaPartida AND ?2 > r.fechaLlegada AND c.nombre = ?3")
    @Query(value = "SELECT * FROM products p INNER JOIN reservations r ON p.id_product = r.products_id_product INNER JOIN cities c ON " +
            "cities_id_city = c.id WHERE (NOT (?1 < r.check_out AND ?2 > check_in)) AND c.name = ?3", nativeQuery = true)
    List<Product> findProductsByDatesAndCity(LocalDate start, LocalDate end, String city);

    @Query(value = "SELECT * FROM products p INNER JOIN categories ca ON p.id_product = ca.products_id_product INNER JOIN cities c ON " +
            "cities_id_city = c.id WHERE ?1 = ca.title AND c.name = ?2", nativeQuery = true)
    List<Product> findProductsByCategoryAndCity(String category, String city);

    @Query(value = "SELECT * FROM products p INNER JOIN reservations r ON p.id_product = r.products_id_product INNER JOIN categories ca ON ca.id_category = ca.products_id_product INNER JOIN cities c ON " +
            "cities_id_city = c.id WHERE ?1 < r.check_out AND ?2 > check_in AND c.name = ?3 AND ca.title = ?4", nativeQuery = true)
    List<Product> findProductsByDatesAndCityAndCategory(LocalDate start, LocalDate end, String city, String category);
}



