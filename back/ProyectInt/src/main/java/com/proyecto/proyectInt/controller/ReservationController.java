package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Reservation;
import com.proyecto.proyectInt.service.ReservationService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    Logger logger = LogManager.getLogger(ReservationController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Reservation>> getReservationList() throws ResourceNotFoundException {
        logger.info("Retrieving data from reservation table");
        return ResponseEntity.ok(reservationService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Reservation>> getReservationById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from reservation table");
        return ResponseEntity.ok(reservationService.findById(id));
    }
    @PostMapping
    public ResponseEntity<Reservation> addReservation(@RequestBody Reservation reservation) throws  BadRequestException {
        logger.info("Adding new reservation");
        return ResponseEntity.ok(reservationService.create(reservation));
    }
    @PutMapping
    public ResponseEntity<Reservation> updateReservation(@RequestBody Reservation reservation) throws BadRequestException {
        logger.info("Updating reservation");
        return ResponseEntity.ok(reservationService.update(reservation));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting reservation");
        reservationService.delete(id);
        return ResponseEntity.ok("Reservation deleted");
    }

    //additional methods
    @GetMapping("/{date1}{date2}")
    public ResponseEntity<List<Reservation>> getReservationByDate(@PathVariable LocalDate date1, @PathVariable LocalDate date2) throws ResourceNotFoundException {
        logger.info("Retrieving data from reservation table");
        return ResponseEntity.ok(reservationService.filterByDate(date1, date2));
    }


}
