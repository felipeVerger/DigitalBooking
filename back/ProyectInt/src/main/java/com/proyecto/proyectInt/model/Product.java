package com.proyecto.proyectInt.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
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
    @Column(name= "id_product")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "health_hygiene")
    private String healthAndHygiene;

    @Column(name = "cancellation_policies")
    private String cancellationPolicy;

    @ManyToOne(optional = false)
    @JoinColumn(name = "categories_id_category", nullable = false)
    private Category category;

    @ManyToMany
    @JoinTable(
            name = "products_has_features",
            joinColumns = @JoinColumn(name = "products_id_product"),
            inverseJoinColumns = @JoinColumn(name = "features_id_feature")
    )
    private List<Feature> features;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Image> images = new ArrayList<>();

    @ManyToOne(optional = false)
    @JoinColumn(name = "cities_id_city", nullable = false)
    private City city;


    public Product(String name, String description, String address, String longitude, String latitude, String healthAndHygiene, String cancellationPolicy, Category category, List<Feature> features, List<Image> images, City city) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.healthAndHygiene = healthAndHygiene;
        this.cancellationPolicy = cancellationPolicy;
        this.category = category;
        this.features = features;
        this.images = images;
        this.city = city;
    }
}
