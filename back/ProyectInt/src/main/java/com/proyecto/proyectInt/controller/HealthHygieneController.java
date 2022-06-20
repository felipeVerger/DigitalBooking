package com.proyecto.proyectInt.controller;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.HealthHygiene;
import com.proyecto.proyectInt.service.HealthHygieneService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/healthHygiene")
public class HealthHygieneController {
    @Autowired
    HealthHygieneService healthHygieneService;
    Logger logger = LogManager.getLogger(HouseRuleController.class);
    @GetMapping("/findAll")
    public ResponseEntity<List<HealthHygiene>> getHealthHygieneList() throws ResourceNotFoundException {
        logger.info("Retrieving data from HealthHygiene table");
        return ResponseEntity.ok(healthHygieneService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<HealthHygiene>> getHealthHygieneById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from HealthHygiene table");
        return ResponseEntity.ok(healthHygieneService.findById(id));
    }
    @PostMapping
    public ResponseEntity<HealthHygiene> addHealthHygiene(@RequestBody HealthHygiene healthHygiene) throws BadRequestException {
        logger.info("Adding new HealthHygiene");
        return ResponseEntity.ok(healthHygieneService.create(healthHygiene));
    }
    @PutMapping("update")
    public ResponseEntity<HealthHygiene> updateHealthHygiene(@RequestBody HealthHygiene healthHygiene) throws BadRequestException {
        logger.info("Updating HealthHygiene");
        return ResponseEntity.ok(healthHygieneService.update(healthHygiene));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHealthHygiene(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting HouseRules");
        healthHygieneService.delete(id);
        return ResponseEntity.ok("HealthHygiene deleted");
    }
}