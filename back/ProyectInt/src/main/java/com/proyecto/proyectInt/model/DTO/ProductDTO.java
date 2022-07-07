package com.proyecto.proyectInt.model.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.proyecto.proyectInt.model.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
public class ProductDTO {

    private Long id;
    private String name;
    private String subtitle;
    private String description;
    private String address;
    private String longitude;
    private String latitude;
    private String cancellationPolicy;
    private Double price;
    private int score;
    private Category category;
    private Set<Feature> features;
    private City city;
    private Set<Image> images;
    private Set<Reservation> reservations;
    private Set<Favorite> favorites;
    private Set<HealthHygiene> healthHygiene;
    private Set<HouseRule> houseRules;


    public ProductDTO() {
    }

    public ProductDTO(String name, String description,String subtitle, Double price, String address, String longitude, String latitude , String cancellationPolicy, Category category, Set<Feature> features, Set<Image> images, Set<Reservation> reservations, City city, int score, Set<HouseRule> houseRules, Set<HealthHygiene> healthHygiene) {
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

    public ProductDTO(String name, String description, String latitude, String longitude) {        this.name = name;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
