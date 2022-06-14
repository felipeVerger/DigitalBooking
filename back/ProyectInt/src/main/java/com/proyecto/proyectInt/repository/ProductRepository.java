package com.proyecto.proyectInt.repository;
import com.proyecto.proyectInt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Optional<Product> findProductByProductName(String name);

    @Query("SELECT CONCAT(p.city.city,', ',p.city.country) FROM Product p GROUP BY p.city.city")
    Optional<List<String>> getLocations();

    @Query("SELECT p FROM Product p WHERE p.category.title = ?1")
    Optional<List<Product>> getProductsByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.score = ?1")
    Optional<List<Product>> filterByScore(int score);

    //revisar la query para filtrar. issue 58
    // ejemplo
    //   SELECT * FROM products p left join reservations r on p.id_product = r.id_reservation WHERE
    //   (r.id_reservation is null AND p.cities_id_city = 2) OR "2021-12-05" < r.checkin_date AND "2021-12-10" < r.checkin_date
    //   AND p.cities_id_city = 2 OR "2022-12-05" > r.checkout_date AND "2022-12-10" > r.checkout_date AND p.cities_id_city = 2;

     //@Query("SELECT p FROM Product p left join Reservation r on p.id = r.product.id WHERE " +
     //       "(r.id is null AND p.city = :city) " +
     //        "OR r.checkIn BETWEEN :init AND :end " +
     //       "or r.checkOut BETWEEN :init AND :end " +
     //       "or r.checkIn > :end " +
     //       "or r.checkOut < :init " +
     //       "and r.city.id = :city ")
    //List<Product> filterByDateAndCity(String city, LocalDate init, LocalDate end);
}


