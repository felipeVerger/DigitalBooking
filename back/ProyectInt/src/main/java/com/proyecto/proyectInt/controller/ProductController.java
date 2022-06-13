package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Product;
import com.proyecto.proyectInt.service.ProductService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    /* = Attributes = */
    @Autowired
    ProductService productService;

    private static final Logger logger = LogManager.getLogger(ProductController.class);

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getProductList() {
        logger.info("Retrieving data from product table");
        return ResponseEntity.ok(productService.findAll());
    }

    /* = Get = */
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Long id) {
        logger.info("Retrieving data from product table");
        return ResponseEntity.ok(productService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        logger.info("Adding new product");
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.create(product));
    }
    @PutMapping
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        logger.info("Updating product");
        return ResponseEntity.ok(productService.update(product));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        logger.info("Deleting product");
        productService.delete(id);
        return ResponseEntity.ok("Product deleted");
    }


}