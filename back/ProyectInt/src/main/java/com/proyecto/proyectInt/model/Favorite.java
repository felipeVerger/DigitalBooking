package com.proyecto.proyectInt.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@Getter
@NoArgsConstructor
@Setter
@Table(name = "favorites")
public class Favorite {
    @Id
    @SequenceGenerator(name = "favorite_sequence", sequenceName = "favorite_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "favorite_sequence")
    private Long id;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="products_id_product")
    private Product product;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "users_id_user", nullable = false)
    private User users;

    public Favorite(Long id, Product product, User users) {
        this.id = id;
        this.product = product;
        this.users = users;
    }
}