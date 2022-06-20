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
    @Column
    private LocalDate checkIn;
    @Column
    private LocalDate checkOut;
    @Column
    private LocalTime arrivalTime;
    @Column
    private String additionalInfo;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="products_id_product", nullable = false)
    private Product products;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="users_id_user", nullable = false)
    private User users;

    public Reservation(LocalDate checkIn, LocalDate checkOut, LocalTime arrivalTime, Product product, User user) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.products = product;
        this.users = user;
    }
    public Reservation(LocalDate checkIn, LocalDate checkOut, LocalTime arrivalTime, String additionalInfo, Product product, User user) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.additionalInfo = additionalInfo;
        this.products = product;
        this.users = user;
    }
}