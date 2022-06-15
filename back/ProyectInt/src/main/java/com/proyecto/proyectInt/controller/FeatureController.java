package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Feature;
import com.proyecto.proyectInt.service.FeatureService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/feature")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    Logger logger = LogManager.getLogger(FeatureController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Feature>> getFeatureList() throws ResourceNotFoundException {
        logger.info("Retrieving data from feature table");
        return ResponseEntity.ok(featureService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Feature>> getFeatureById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from feature table");
        return ResponseEntity.ok(featureService.findById(id));
    }
    @PostMapping
    public ResponseEntity<Feature> addFeature(@RequestBody Feature feature) throws BadRequestException {
        logger.info("Adding new feature");
        return ResponseEntity.status(HttpStatus.CREATED).body(featureService.create(feature));
    }
    @PutMapping
    public ResponseEntity<Feature> updateFeature(@RequestBody Feature feature) throws BadRequestException {
        logger.info("Updating feature");
        return ResponseEntity.ok(featureService.update(feature));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFeature(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting feature");
        featureService.delete(id);
        return ResponseEntity.ok("Feature deleted");
    }

    @DeleteMapping("/null")
    public ResponseEntity<String> deleteNullID (){
        featureService.delete(nullID);
            }


}
