package com.proyecto.proyectInt.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

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

    @Column(name="checkIn")
    @JsonSerialize(using = ToStringSerializer.class)
    private LocalDate checkIn;

    @Column(name="checkOut")
    @JsonSerialize(using = ToStringSerializer.class)
    private LocalDate checkOut;

    @Column(name="info")
    private String additionalInfo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="products_id_product", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="users_id_user", nullable = false)
    private User user;
}
