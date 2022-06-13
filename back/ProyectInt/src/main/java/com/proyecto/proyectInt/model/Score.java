package com.proyecto.proyectInt.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "scores")
public class Score {

    @Id
    @SequenceGenerator(name = "score_sequence", sequenceName = "score_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "score_sequence")
    private Long id;

    @Column
    private int score;

    @ManyToOne
    @JoinColumn(name = "products_id_product", nullable = false)
    private Product product;

    public Score(int score) {
        this.score = score;
    }
}
