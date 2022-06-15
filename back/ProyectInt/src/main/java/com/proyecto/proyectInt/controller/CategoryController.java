package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Category;
import com.proyecto.proyectInt.service.CategoryService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    Logger logger = LogManager.getLogger(CategoryController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories() throws ResourceNotFoundException {
        logger.info("Retrieving data from category table");
        return ResponseEntity.ok(categoryService.findAll());
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Optional<Category>> getCategoryById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from category table");
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) throws BadRequestException {
        logger.info("Adding new category");
        categoryService.create(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.create(category));
    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) throws BadRequestException {
        logger.info("Updating category");
        return ResponseEntity.ok(categoryService.update(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting category");
        categoryService.delete(id);
        return ResponseEntity.ok("Category deleted");
    }

    @GetMapping("/title={title}")
    public ResponseEntity<Optional<Category>> getCategoryByTitle(@PathVariable String title) throws ResourceNotFoundException {
        logger.info("Retrieving data from category table");
        return ResponseEntity.ok(categoryService.findByTitle(title));
    }
}
