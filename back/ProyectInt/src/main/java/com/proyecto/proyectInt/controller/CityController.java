package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;

import com.proyecto.proyectInt.model.City;

import com.proyecto.proyectInt.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cities")
public class CityController {

    /* = Attribute = */
    private final CityService service;

    /* = Get = */
    @GetMapping
    public List<City> searchCategories() throws BadRequestException {
        return service.searchAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> searchCity(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<City> cityActualizada = service.search(id);
        return cityActualizada.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /* = Post = */
    @PostMapping
    public City saveCity(@RequestBody City city) throws BadRequestException {
        return service.citySave(city);
    }


    /* = Update = */
    @PutMapping("/update")
    public ResponseEntity<City> toUpdateCity(@RequestBody City city) throws ResourceNotFoundException {
        City updatedCity = service.toUpdate(city);
        if (updatedCity != null) {
            return ResponseEntity.ok(updatedCity);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id) throws ResourceNotFoundException {
        service.cityDelete(id);
        return ResponseEntity.ok("City deleted");

    }

    /* = Constructor = */

    @Autowired
    public CityController(CityService service) {
        this.service = service;
    }
}

