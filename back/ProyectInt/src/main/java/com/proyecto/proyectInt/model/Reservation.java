package com.proyecto.proyectInt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reservations")
public class Reservation {

    @Id
    @SequenceGenerator (name = "reservation_sequence", sequenceName = "reservation_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_sequence")
    private Long id;


    private LocalDate checkIn;

    private LocalDate checkOut;

    private LocalTime arrivalTime;

    private String additionalInfo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="products_id_product", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="users_id_user", nullable = false)
    private User user;

    public Reservation(LocalDate checkIn, LocalDate checkOut, LocalTime arrivalTime, Product product, User user) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.product = product;
        this.user = user;
    }

    public Reservation(LocalDate checkIn, LocalDate checkOut, LocalTime arrivalTime, String additionalInfo, Product product, User user) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.additionalInfo = additionalInfo;
        this.product = product;
        this.user = user;
    }
}
