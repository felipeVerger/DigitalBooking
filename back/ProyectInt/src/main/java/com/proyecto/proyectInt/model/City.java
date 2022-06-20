package com.proyecto.proyectInt.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="cities")
public class City {
    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private Long id;
    @Column
    private String name;
    @Column
    private String country;

    @OneToMany(mappedBy = "city")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }
    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", city='" + name + '\'' +
                ", country='" + country +
                '}';
    }
}