package com.proyecto.proyectInt.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.*;
import com.proyecto.proyectInt.repository.ProductRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class ProductService {
    /* = Attributes = */
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ObjectMapper mapper;
    private static final Logger logger = LogManager.getLogger(ProductService.class);
    /* = Constructor = */
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    /* = Methods = */
    public Product create(Product product) throws BadRequestException {
        if (product.getId() != null){
            logger.error("Attempt failed. This product already exists in our database.");
            throw new BadRequestException("Attempt failed. This product already exists in our database.");
        }else{
            logger.info("Success. New product added to the database.");
            return productRepository.save(product);
        }
    }
    public Set<Product> findAll(){
        List<Product> products = productRepository.findAll();
        Set<Product> product1 = new HashSet<>();

        for (Product product : products) {
            product1.add(mapper.convertValue(product, Product.class));
        }
        return product1;
    }
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    public Product update(Product product) throws ResourceNotFoundException{
        if(findById(product.getId()) == null)
            throw  new ResourceNotFoundException("Product: " + product.getId() +" not found.");
        return productRepository.save(product);
    }
    public void delete(Long id) throws ResourceNotFoundException{
        Optional<Product> productFound = findById(id);
        if (productFound.isPresent()) {
            productRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("The product with id: " + id + " can't be deleted, search error");
        }
    }
    //additional services
//    public Product findProductByName(String name){
//        return productRepository.findProductByProductName(name).orElse(null);
//    }
//
//    public Optional<List<String>> getLocations(){
//        return productRepository.getLocations();
////    }
//
//    public Optional<List<Product>> getProductsByCategory(String category){
//        return productRepository.getProductsByCategory(category);
//    }
}