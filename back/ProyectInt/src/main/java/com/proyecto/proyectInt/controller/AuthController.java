package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.model.Favorite;
import com.proyecto.proyectInt.model.Reservation;
import com.proyecto.proyectInt.model.Role;
import com.proyecto.proyectInt.model.User;
import com.proyecto.proyectInt.repository.RoleRepository;
import com.proyecto.proyectInt.repository.UserRepository;
import com.proyecto.proyectInt.security.ingress.form.Login;
import com.proyecto.proyectInt.security.ingress.form.SignUp;
import com.proyecto.proyectInt.security.ingress.jwtresponse.JwtRes;
import com.proyecto.proyectInt.security.ingress.jwtresponse.ResponseMes;
import com.proyecto.proyectInt.security.jwt.JwtProvider;
import com.proyecto.proyectInt.security.services.UserPrinciple;
import com.proyecto.proyectInt.service.EmailService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {

    Logger logger = LogManager.getLogger(AuthController.class);

    AuthenticationManager authenticationManager;
    UserRepository userRepository;
    RoleRepository roleRepository;
    PasswordEncoder encoder;
    JwtProvider jwtProvider;
    private EmailService emailSenderService;

    private Role roleSelected;
    private Set<Favorite> favorites = new HashSet<>();
    private Set<Reservation> reservations = new HashSet<>();

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder encoder, JwtProvider jwtProvider, EmailService emailSenderService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
        this.jwtProvider = jwtProvider;
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody Login loginRequest) {
        logger.info(loginRequest.getEmail());
        logger.info(loginRequest.getPassword());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserPrinciple) authentication.getPrincipal();

        User user = userRepository.findByEmail(userDetails.getUsername());


        return ResponseEntity.ok(new JwtRes(jwt, user.getId(), userDetails.getUsername(), user.getUsername(), user.getLastname(), userDetails.getAuthorities()));
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUp signUpRequest) {
        logger.info("Retrieving new user");
        logger.info("signUpRequestLastname");
        logger.info(signUpRequest.getLastName());

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMes("Fail -> Email is already exist in our database!"),
                    HttpStatus.BAD_REQUEST);
        }

        this.roleSelected = this.roleRepository.findRoleByName(signUpRequest.getRole());

        User user = new User(signUpRequest.getName(), signUpRequest.getLastName(),
                signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()), roleSelected, signUpRequest.getCity(), this.favorites, this.reservations);

        logger.info("userLastname");
        logger.info(user.getLastname());
        userRepository.save(user);logger.info("userLastname");
        logger.info("userSaved!");
        try {
            Login userAuth = new Login(user.getEmail(), signUpRequest.getPassword());
            logger.info("userAuth!");
            return this.authenticateUser(userAuth);
        } finally {
            logger.info("emailSending!");
//            emailSenderService.sendSimpleEmail(user.getEmail(), "Confirmación de cuenta",
//                    "Hola " + user.getUsername() + ", ¡Bienvenido a Digital Booking Grupo 10!" + "\n\n" +
//                            "Estaremos atentos a todas tus peticiones a través de este correo electrónico" + "\n\n" +
//                            "¡Tu estancia con nosotros será inolvidable!");
            logger.info("emailSended!");
        }
    }

}
