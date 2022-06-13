package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Favorite;
import com.proyecto.proyectInt.service.FavoriteService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favs")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    Logger logger = LogManager.getLogger(FavoriteController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Favorite>> getFavoriteList() throws ResourceNotFoundException {
        logger.info("Retrieving data from favorite table");
        return ResponseEntity.ok(favoriteService.findAll());
    }

    @GetMapping("/u{id}")
    public ResponseEntity<List<Favorite>> getFavoritesByUserId(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from user's favorite table");
        return ResponseEntity.ok(favoriteService.findByUserId(id));
    }

    @GetMapping("/p{id}")
    public ResponseEntity<List<Favorite>> getFavoritesByProductId(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from product's favorite table");
        return ResponseEntity.ok(favoriteService.findByProductId(id));
    }

    @GetMapping("/u{id}/p{id}")
    public ResponseEntity<List<Favorite>> getFavoriteByUserIdAndProductId(@PathVariable Long id1, @PathVariable Long id2) throws ResourceNotFoundException {
        logger.info("Retrieving data from user's favorite table");
        return ResponseEntity.ok(favoriteService.findByUserIdAndProductId(id1, id2));
    }

    @PostMapping
    public ResponseEntity<Favorite> addFavorite(@RequestBody Favorite favorite) throws BadRequestException {
        logger.info("Adding new favorite");
        return ResponseEntity.ok(favoriteService.create(favorite));
    }

    @PutMapping
    public ResponseEntity<Favorite> updateFavorite(@RequestBody Favorite favorite) throws BadRequestException {
        logger.info("Updating favorite");
        return ResponseEntity.ok(favoriteService.update(favorite));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFavorite(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting favorite");
        favoriteService.delete(id);
        return ResponseEntity.ok("Favorite deleted");
    }
}
