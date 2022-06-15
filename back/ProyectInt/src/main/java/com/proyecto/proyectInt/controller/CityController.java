package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;

import com.proyecto.proyectInt.model.City;

import com.proyecto.proyectInt.service.CityService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cities")
public class CityController {

    /* = Attribute = */
    @Autowired
    private CityService cityservice;

    Logger logger = LogManager.getLogger(CityController.class);

    /* = Get = */
    @GetMapping("/all")
    public ResponseEntity <List<City>> getAllCities() throws ResourceNotFoundException {
        logger.info("Retrieving data from city table");
        return ResponseEntity.ok(cityservice.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<City>> getCityById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from city table");
        return ResponseEntity.ok(cityservice.findById(id));
    }
    @PostMapping(value = "/add")
    public ResponseEntity<String> addCity(@RequestBody City city) throws BadRequestException {
        cityservice.create(city);
        return ResponseEntity.ok("Ciudad agregada correctamente");
    }

    @PutMapping
    public ResponseEntity<City> updateCity(@RequestBody City city) throws BadRequestException {
        logger.info("Updating city");
        return ResponseEntity.ok(cityservice.update(city));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting city");
        cityservice.delete(id);
        return ResponseEntity.ok("City deleted");
    }


}



