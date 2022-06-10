package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Image;
import com.proyecto.proyectInt.service.ImageService;
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
    private final ImageService service;

    /* = Constructor = */
    @Autowired
    public ImageController(ImageService service) {
        this.service = service;
    }

    /* = Get = */
    @GetMapping("/findAll")
    public List<Image> searchImages() throws BadRequestException {
        return service.searchAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Image> searchImage(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Image> imageUpdated=service.search(id);
        return imageUpdated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /* = Post = */
    @PostMapping
    public Image saveImage(@RequestBody Image image) throws BadRequestException {
        return service.imageSave(image);
    }

    /* = Update = */
    @PutMapping("/update")
    public ResponseEntity<Image> toUpdateImage(@RequestBody Image image) throws ResourceNotFoundException {
        Image updatedImage =service.toUpdate(image);
        if (updatedImage !=null){
            return ResponseEntity.ok(updatedImage);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) throws ResourceNotFoundException {
        service.imageDelete(id);
        return ResponseEntity.ok("Image deleted");
    }
}