package com.proyecto.proyectInt.repository;

import com.proyecto.proyectInt.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("SELECT r FROM Reservation r WHERE :init < r.checkIn AND :end < r.checkIn OR " +
            ":init > r.checkOut AND :end > r.checkOut")
    List<Reservation> filterByDate(LocalDate init, LocalDate end);

    @Query("SELECT r FROM Reservation r WHERE r.product.id = :id")
    List<Reservation> findByProductId(Long id);

    @Query("SELECT r FROM Reservation r WHERE r.user.id = :id")
    List<Reservation> findByUserId(@Param("id") Long id);

    @Query(value = "SELECT r from Reservation r WHERE r.product.id = :id " +
            "AND r.checkIn BETWEEN :start and :end " +
            "OR r.checkOut BETWEEN :start and :end")
    List<Reservation> findSpecificReservation(Integer id, LocalDate start, LocalDate end);

}
