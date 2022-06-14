package com.proyecto.proyectInt.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="house_rules")
public class HouseRule {

    @Id
    @SequenceGenerator(name = "house_sequence", sequenceName = "house_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "house_sequence")
    @Column(name= "id_house_rules")
    private Long id;

    @Column(name = "rules")
    private String description;

    @ManyToOne
    @JoinColumn(name = "products_id_product", nullable = false)
    private Product product;
}
