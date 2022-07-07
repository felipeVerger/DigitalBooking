package com.proyecto.proyectInt.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.proyecto.proyectInt.repository.FavoriteRepository;
import com.proyecto.proyectInt.repository.ReservationRepository;
import com.proyecto.proyectInt.security.jwt.JwtProvider;
import com.proyecto.proyectInt.service.EmailService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = {"email"}))
public class User {

    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator= "user_sequence")
    private Long id;
    @Column
    private String username;
    @Column
    private String lastname;
    @Column
    private String email;
    @Column
    private String password;

    @ManyToOne
    @JoinColumn(name = "roles_id_role")
    private Role role;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Reservation> reservations;

//    public User(String name, String lastName, String email, String password) {
//        this.username = name;
//        this.lastname = lastName;
//        this.email = email;
//        this.password = password;
//    }
    public User(String name, String lastName, String email, String password, Role role, String city, Set<Favorite> favorites, Set<Reservation> reservations) {
        this.username = name;
        this.lastname = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.favorites = favorites;
        this.reservations = reservations;
    }
    //metodos de la interfaz UserDetails
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role.getName());
//        return Collections.singletonList(authority);
//    }

//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
}