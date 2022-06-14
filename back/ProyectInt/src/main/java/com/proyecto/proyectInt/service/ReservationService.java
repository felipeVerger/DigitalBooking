package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Reservation;
import com.proyecto.proyectInt.repository.ReservationRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService implements EntityService<Reservation>{

    @Autowired
    ReservationRepository repository;

    Logger logger = LogManager.getLogger(ReservationService.class);

    @Override
    public Optional<Reservation> findById(Long id) throws ResourceNotFoundException {
        Optional<Reservation> reservationSearched = repository.findById(id);
        if(reservationSearched.isPresent()){
            logger.info("Success. Reservation found with id "+id+ ".");
            return reservationSearched;
        }else{
            logger.error("Attempt failed. The reservation you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The reservation you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public Reservation update(Reservation reservation) throws BadRequestException {
        Optional<Reservation> reservationSearched = repository.findById(reservation.getId());
        if (reservationSearched.isPresent()){
            logger.info("Success. Reservation found and modified.");
            return repository.save(reservation);
        }else{
            logger.error("Attempt failed. The reservation you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The reservation you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<Reservation> findAll() throws ResourceNotFoundException {
        List<Reservation> reservationsSearched = repository.findAll();
        if (reservationsSearched.isEmpty()) {
            logger.error("Attempt Failed. No reservations found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No reservations found in our database.");
        } else {
            logger.info("Success. Retrieving list of reservations.");
            return reservationsSearched;
        }
    }

    @Override
    public Reservation create(Reservation reservation) throws BadRequestException {
        if (reservation.getId() != null) {
            logger.error("Attempt failed. This reservation already exists in our database.");
            throw new BadRequestException("Attempt failed. This Reservation already exists in our database.");
        } else {
            logger.info("Success. New reservation added to the database.");
            return reservation;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Reservation with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Reservation with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Reservation with id " + id + " could not be found. Database remains untouched.");
        }
    }

    //additional services
    public List<Reservation> filterByDate(LocalDate init, LocalDate end) throws ResourceNotFoundException {
        List<Reservation> reservationsSearched = repository.filterByDate(init, end);
        if (reservationsSearched.isEmpty()) {
            logger.error("Attempt Failed. No reservations found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No reservations found in our database.");
        } else {
            logger.info("Success. Retrieving list of reservations.");
            return reservationsSearched;
        }
    }

    public List<Reservation> findByProductId( Long id) throws ResourceNotFoundException {
        List<Reservation> reservationsSearched = repository.findByProductId(id);
        if (reservationsSearched.isEmpty()) {
            logger.error("Attempt Failed. No reservations found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No reservations found in our database.");
        } else {
            logger.info("Success. Retrieving list of reservations.");
            return reservationsSearched;
        }
    }

    public List<Reservation> findByUserId(Long id) throws ResourceNotFoundException {
        List<Reservation> reservationsSearched = repository.findByUserId(id);
        if (reservationsSearched.isEmpty()) {
            logger.error("Attempt Failed. No reservations found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No reservations found in our database.");
        } else {
            logger.info("Success. Retrieving list of reservations.");
            return reservationsSearched;
        }
    }

    public List<Reservation> findSpecificReservation(Integer id, LocalDate start, LocalDate end) throws ResourceNotFoundException {
        List<Reservation> reservationsSearched = repository.findSpecificReservation(id, start, end);
        if (reservationsSearched.isEmpty()) {
            logger.error("Attempt Failed. No reservations found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No reservations found in our database.");
        } else {
            logger.info("Success. Retrieving list of reservations.");
            return reservationsSearched;
        }
    }
}
