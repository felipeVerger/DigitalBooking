package com.proyecto.proyectInt.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@Table(name = "reservations")
public class Reservation {

    @Id
    @SequenceGenerator (name = "reservation_sequence", sequenceName = "reservation_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_sequence")
    private Long id;
    @Column
    private LocalDate checkIn;
    @Column
    private LocalDate checkOut;
    @Column
    private LocalTime arrivalTime;
    @Column
    private String additionalInfo;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="products_id_product")
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    @JoinColumn(name="users_id_user", nullable = false)
    private User user;

    public Reservation() {}

    public Reservation(LocalDate checkIn, LocalDate checkOut, LocalTime arrivalTime, String additionalInfo, Product product, User user) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.additionalInfo = additionalInfo;
        this.product = product;
        this.user = user;
    }
}
