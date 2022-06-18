package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Role;
import org.apache.logging.log4j.LogManager;
import com.proyecto.proyectInt.service.RoleService;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    RoleService roleService;

    Logger logger = LogManager.getLogger(UserController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Role>> getRoleList() throws ResourceNotFoundException {
        logger.info("Retrieving data from role table");
        return ResponseEntity.ok(roleService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Role>> getRoleById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from role table");
        return ResponseEntity.ok(roleService.findById(id));
    }
    @PostMapping
    public ResponseEntity<Role> addRole(@RequestBody Role role) throws BadRequestException {
        logger.info("Adding new role");
        return ResponseEntity.ok(roleService.create(role));
    }
    @PutMapping
    public ResponseEntity<Role> updateRole(@RequestBody Role role) throws BadRequestException {
        logger.info("Updating role");
        return ResponseEntity.ok(roleService.update(role));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRole(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting role");
        roleService.delete(id);
        return ResponseEntity.ok("Role deleted");
    }
}