package com.proyecto.proyectInt.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Table(name = "roles")
public class Role {


    @Id
    private Long id;
    @Column
    private String name;
    @Column
    private String icon;

    @OneToMany(mappedBy = "role")
    @JsonIgnore
    private Set<User> users;
}