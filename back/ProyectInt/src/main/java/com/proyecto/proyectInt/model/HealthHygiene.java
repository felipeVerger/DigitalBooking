package com.proyecto.proyectInt.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="health_hygiene")
public class HealthHygiene {

    @Id
    @SequenceGenerator(name = "health_sequence", sequenceName = "health_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "health_sequence")
    @Column(name= "id_health_hygiene")
    private Long id;

    @Column(name = "health_hygiene")
    private String description;

    @ManyToOne
    @JoinColumn(name = "products_id_product", nullable = false)
    private Product product;
}
