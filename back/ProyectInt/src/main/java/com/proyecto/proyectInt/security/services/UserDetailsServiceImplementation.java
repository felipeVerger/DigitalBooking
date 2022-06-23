package com.proyecto.proyectInt.security.services;


import com.proyecto.proyectInt.model.User;
import com.proyecto.proyectInt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {


    /* Attributes */
    @Autowired
    UserRepository userRepository;

    /* Mehtods */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("Not found!");
        }
        return UserPrinciple.build(user);
    }
}