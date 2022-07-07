package com.proyecto.proyectInt.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id_product")
    private Long id;

    @Column
    private String name;

    @Column
    private String subtitle;

    @Column
    private String description;

    @Column
    private String address;

    @Column
    private String longitude;

    @Column
    private String latitude;

    @Column
    private String cancellationPolicy;

    @Column
    private Double price;

    @Column
    private int score;

    @ManyToOne(optional = false)
    @JoinColumn(name = "categories_id_category", nullable = false)
    private Category category;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "products_has_features",
            joinColumns = @JoinColumn(name = "products_id_product"),
            inverseJoinColumns = @JoinColumn(name = "features_id_feature")
    )
    private Set<Feature> features;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cities_id_city", nullable = false)
    private City city;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="products_id_product")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<Image> images = new HashSet<>();

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="products_id_product")
    @JsonManagedReference
    private Set<Reservation> reservations;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "products", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<HealthHygiene> healthHygiene;

    @OneToMany(mappedBy = "products", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<HouseRule> houseRules;


    public Product(String name, String description,String subtitle, Double price, String address, String longitude, String latitude , String cancellationPolicy, Category category, Set<Feature> features, Set<Image> images, Set<Reservation> reservations, City city, int score, Set<HouseRule> houseRules, Set<HealthHygiene> healthHygiene) {
        this.name = name;
        this.description = description;
        this.subtitle = subtitle;
        this.price = price;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.cancellationPolicy = cancellationPolicy;
        this.category = category;
        this.features = features;
        this.images = images;
        this.reservations = reservations;
        this.city = city;
        this.score = score;
        this.houseRules = houseRules;
        this.healthHygiene = healthHygiene;

    }

    public Product(String name, String subtitle, Double price, String description, String address, String longitude, String latitude, String cancellationPolicy, Category category, Set<Feature> features, City city, int score, Set<HouseRule> houseRules, Set<HealthHygiene> healthHygiene) {
        this.name = name;
        this.subtitle = subtitle;
        this.price = price;
        this.description = description;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.cancellationPolicy = cancellationPolicy;
        this.category = category;
        this.features = features;
        this.city = city;
        this.score = score;
        this.houseRules = houseRules;
        this.healthHygiene = healthHygiene;
    }
}
