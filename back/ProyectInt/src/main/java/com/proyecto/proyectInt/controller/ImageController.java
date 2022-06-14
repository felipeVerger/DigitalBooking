package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Image;
import com.proyecto.proyectInt.service.ImageService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/images")
public class ImageController {

    /* = Attribute = */
    @Autowired
    private ImageService service;

    Logger logger = LogManager.getLogger(ImageController.class);

    /* = Get = */
    @GetMapping("/all")
    public ResponseEntity<List<Image>> searchImages() throws ResourceNotFoundException {
        logger.info("Retrieving data from images table");
        return ResponseEntity.ok( service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Image> searchImage(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Image> imageUpdated=service.findById(id);
        logger.info("Retrieving data from image table");
        return imageUpdated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /* = Post = */
    @PostMapping
    public ResponseEntity<Image> saveImage(@RequestBody Image image) throws BadRequestException {
        logger.info("Adding new image");
        return ResponseEntity.ok(service.create(image));
    }

    /* = Update = */
    @PutMapping
    public ResponseEntity<Image> toUpdateImage(@RequestBody Image image) throws BadRequestException {
        logger.info("Updating image");
        return ResponseEntity.ok(service.update(image));
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) throws ResourceNotFoundException {
        service.delete(id);
        logger.info("Deleting image");
        return ResponseEntity.ok("Image deleted");
    }
}