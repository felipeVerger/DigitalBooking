package com.proyecto.proyectInt.model;



import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


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

    @Column(name = "subtitle")
    private String subtitle;

    @Column(name = "description")
    private String description;

    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "cancellation_policies")
    private String cancellationPolicy;

    @Column(name = "price")
    private Double price;

    @Column(name = "score" )
    private int score;

    @ManyToOne(optional = false)
    @JoinColumn(name = "categories_id_categories", nullable = false)
    private Category category;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "products_has_features",
            joinColumns = @JoinColumn(name = "products_id_product"),
            inverseJoinColumns = @JoinColumn(name = "features_id_feature")
    )
    private Set<Feature> features;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<Image> images;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cities_id_city", nullable = false)
    private City city;


    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Reservation> reservations;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<HealthHygiene> healthHygiene;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<HouseRule> houseRules;


    public Product(String name, String description,String subtitle, Double price, String address, String longitude, String latitude , String cancellationPolicy, Category category, Set<Feature> features, Set<Image> images, City city, int score, Set<HouseRule> houseRules, Set<HealthHygiene> healthHygiene) {
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
