package com.proyecto.proyectInt.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;


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

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_category", nullable = false)
    private Category category;

    @JoinTable(
            name = "products_has_features",
            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_feature")
    )
    @ManyToMany
    private List<Feature> features;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_city", nullable = false)
    private City city;





}
