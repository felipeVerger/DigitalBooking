package com.proyecto.proyectInt.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="health_hygiene")
public class HealthHygiene {

    @Id
    @SequenceGenerator(name = "health_sequence", sequenceName = "health_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "health_sequence")
    private Long id;

    @Column
    private String description;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "products_id_product", nullable = false)
    private Product products;
}