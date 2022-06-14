package com.proyecto.proyectInt.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="features")
public class Feature {


    @Id
    @SequenceGenerator(name = "feature_sequence", sequenceName = "feature_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feature_sequence")
    private Long id;

    private String name;

    private String icon;


    public Feature(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "Feature{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                '}';
    }
}
