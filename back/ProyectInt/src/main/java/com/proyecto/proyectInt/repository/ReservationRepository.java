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

    //@Query("SELECT r FROM reservation r WHERE :init < r.checkIn AND :end < r.checkIn OR " +
    //        ":init > r.checkOut AND :end > r.checkOut")
    //List<Reservation> filterByDate(LocalDate init, LocalDate end);

    //@Query("SELECT r FROM reservation r WHERE r.product.id = :id")
    //List<Reservation> findByProductId(@Param("id") Long id);

    //@Query("SELECT r FROM reservation r WHERE r.user.id = :id")
    //List<Reservation> findByUserId(@Param("id") Long id);

    //@Query(value = "SELECT * from reservation WHERE reservation.product_id = :id " +
    //        "AND reservations.checkin_date BETWEEN :start and :end " +
    //        "OR reservations.checkout_date BETWEEN :start and :end",
    //        nativeQuery = true)
    //List<Reservation> findSpecificReservation(Integer id, LocalDate start, LocalDate end);

}
