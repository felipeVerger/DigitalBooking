package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.model.Product;
import com.proyecto.proyectInt.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    /* = Attributes = */
    private final ProductService productService;

    /* = Constructor = */
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /* = Get = */
    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable Integer id) {

        Product product = productService.findById(id);

        if (product.getName() != null) {
            return ResponseEntity.ok(product);
        } else {
            return new ResponseEntity("There's no product with that id, please verify and try again", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/findAll")
    public List<Product> findAllProducts() {
        return productService.findAll().stream().collect(Collectors.toList());
    }

    /* = Post = */
    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Product product) {

        ResponseEntity response;

        if (productService.findProductByName(product.getName()) != null) {
            response = new ResponseEntity("The product must have a name", HttpStatus.CONFLICT);
        } else if (product.getImages().size() == 0) {
            response = new ResponseEntity("The photo gallery must contain at least one image, please add it", HttpStatus.CONFLICT);
        }else if (product.getLatitude() != null && product.getLongitude() != null) {
            response = new ResponseEntity("The coordinates must have latitude and longitude, please enter both of them", HttpStatus.CONFLICT);
        } else if (product.getFeatures().size() == 0) {
            response = new ResponseEntity("The array of services should contain at least one service", HttpStatus.CONFLICT);
        }else{
            response = new ResponseEntity(productService.create(product), HttpStatus.CREATED);
        }

        return response;
    }

}
