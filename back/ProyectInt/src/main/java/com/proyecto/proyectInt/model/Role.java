package com.proyecto.proyectInt.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor
@Setter
@Table(name = "roles")
public class Role {

    @Id
    @SequenceGenerator(name = "rol_sequence", sequenceName = "rol_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator= "rol_sequence")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="icon")
    private String icon;

    @OneToMany(mappedBy = "roles", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<User> users = new HashSet<>();
}
