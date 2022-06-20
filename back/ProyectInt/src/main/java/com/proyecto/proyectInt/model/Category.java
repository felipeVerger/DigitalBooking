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
@Table(name = "categories")
public class Category {
    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private Long id;
    @Column
    private String title;
    @Column
    private String amount;
    @Column
    private String urlImage;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    public Category(String title, String description, String urlImage) {
        this.title = title;
        this.amount = amount;
        this.urlImage = urlImage;
    }
    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + amount + '\'' +
                ", urlImage='" + urlImage + '\'' +
                ", products=" + products +
                '}';
    }
}