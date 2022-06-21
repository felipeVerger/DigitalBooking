package com.proyecto.proyectInt.controller;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.DTO.ProductDTO;
import com.proyecto.proyectInt.model.Product;
import com.proyecto.proyectInt.service.ProductService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {
    /* = Attributes = */
    @Autowired
    ProductService productService;
    private static final Logger logger = LogManager.getLogger(ProductController.class);


    /* = Constructor = */
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    /* = Get = */
    @GetMapping("/findAll")
    public ResponseEntity<List<ProductDTO>> getProductList() {
        logger.info("Retrieving data from product table");
        return ResponseEntity.ok(productService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<ProductDTO>> getProductById(@PathVariable Long id) {
        logger.info("Retrieving data from product table");
        return ResponseEntity.ok(productService.findById(id));
    }

    /* = Post = */
    @PostMapping("/create")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO product) throws BadRequestException {
        logger.info("Adding new product");
        return ResponseEntity.ok(productService.create(product));
    }

    /* = Put = */
    @PutMapping("/update")
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO product) {
        logger.info("Updating product");
        return ResponseEntity.ok(productService.update(product));
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        logger.info("Deleting product");
        productService.delete(id);
        return ResponseEntity.ok("Product deleted");
    }

    //additional methods

    // TODO CONTROLAR SI ESTOY HACIENDO BIEN CON DTO

    @GetMapping("/{name}")
    public ResponseEntity<ProductDTO> getProductByName(@PathVariable String name) {
        logger.info("Retrieving data from products' table");
        return ResponseEntity.ok(productService.findProductByName(name));
    }

    @GetMapping("/{city}")
    public ResponseEntity<List<Product>> getProductByCity(@PathVariable String city) {
        logger.info("Retrieving data from products' table");
        return ResponseEntity.ok(productService.listProductsByCity(city));
    }

    @GetMapping("/{category}")
    public ResponseEntity <List<Product>> getProductByCategory(@PathVariable String category) {
        logger.info("Retrieving data from products' table");
        return ResponseEntity.ok(productService.listProductsByCategory(category));
    }

    @GetMapping("/{score}")
    public ResponseEntity<List<Product>> getProductByScore(@PathVariable int score) {
        logger.info("Retrieving data from products' table");
        return ResponseEntity.ok(productService.listProductsByScore(score));
    }

    @GetMapping("/{startDate}/{endDate}/{city}")
    public ResponseEntity<List<Product>> getProductByDate(@PathVariable LocalDate startDate, @PathVariable LocalDate endDate, @PathVariable String city) {
        logger.info("Retrieving data from products' table");
        return ResponseEntity.ok(productService.findProductsByDatesAndCity(startDate, endDate, city));
    }

}