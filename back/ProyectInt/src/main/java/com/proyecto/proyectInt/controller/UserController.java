package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.User;
import com.proyecto.proyectInt.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    Logger logger = LogManager.getLogger(UserController.class);

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUserList() throws ResourceNotFoundException {
        logger.info("Retrieving data from user table");
        return ResponseEntity.ok(userService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from user table");
        return ResponseEntity.ok(userService.findById(id));
    }
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) throws BadRequestException {
        logger.info("Adding new user");
        return ResponseEntity.ok(userService.create(user));
    }
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) throws BadRequestException {
        logger.info("Updating user");
        return ResponseEntity.ok(userService.update(user));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting user");
        userService.delete(id);
        return ResponseEntity.ok("User deleted");
    }



}
