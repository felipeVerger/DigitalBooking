package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Category;
import com.proyecto.proyectInt.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/categories")
public class CategoryController {

    /* = Attribute = */
    private final CategoryService service;

    /* = Constructor = */
    @Autowired
    public CategoryController(CategoryService service) {
        this.service = service;
    }

    /* = Get = */
    @GetMapping("/findAll")
    public List<Category> searchCategories() throws ResourceNotFoundException {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> searchCategory(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Category> categoryUpdated=service.findById(id);
        return categoryUpdated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /* = Post = */
    @PostMapping
    public Category saveCategory(@RequestBody Category category) throws BadRequestException {
        return service.create(category);
    }


    /* = Update = */
    @PutMapping("/update")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) throws BadRequestException {
        Category updatedCategory =service.update(category);
        if (updatedCategory !=null){
            return ResponseEntity.ok(updatedCategory);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) throws ResourceNotFoundException {
        service.delete(id);
        return ResponseEntity.ok("Category deleted");

    }
}
