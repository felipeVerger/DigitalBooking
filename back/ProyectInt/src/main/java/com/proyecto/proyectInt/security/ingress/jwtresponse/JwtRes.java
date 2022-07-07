package com.proyecto.proyectInt.security.ingress.jwtresponse;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
public class JwtRes {

    /*     Attributes    */
    private Long id;
    private String token;
    private String type = "Bearer";
    private String email;
    private String name;
    private String lastName;
    private Collection<? extends GrantedAuthority> authorities;


    /* Constructor */
    public JwtRes(String accessToken, Long id, String email, String name, String lastName, Collection<? extends GrantedAuthority> authorities) {
        this.token = accessToken;
        this.id = id;
        this.email = email;
        this.authorities = authorities;
        this.name = name;
        this.lastName = lastName;
    }
}
