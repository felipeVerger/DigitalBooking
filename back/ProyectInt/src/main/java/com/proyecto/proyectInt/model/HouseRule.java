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
@Table(name="house_rules")
public class HouseRule {

    @Id
    @SequenceGenerator(name = "house_sequence", sequenceName = "house_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "house_sequence")
    private Long id;

    @Column
    private String description;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "products_id_product", nullable = false)
    private Product products;
}
