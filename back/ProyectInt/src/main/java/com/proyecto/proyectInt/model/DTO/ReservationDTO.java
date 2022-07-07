package com.proyecto.proyectInt.model.DTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class ReservationDTO {

    private LocalDate checkIn;
    private LocalDate checkOut;
    private LocalTime arrivalTime;
    private String additionalInfo;
    private String productId;
    private String userId;

}