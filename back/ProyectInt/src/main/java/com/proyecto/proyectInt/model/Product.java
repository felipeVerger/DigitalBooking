package com.proyecto.proyectInt.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String address;

    @Column
    private String longitude;

    @Column
    private String latitude;

    @Column
    private String healthAndHygiene;

    @Column
    private String securityPolicy;

    @Column
    private String cancellationPolicy;





}
