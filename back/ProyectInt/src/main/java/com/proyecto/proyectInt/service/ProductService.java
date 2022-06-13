package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.model.Product;
import com.proyecto.proyectInt.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements EntityService<Product> {

    /* = Attributes = */
    @Autowired
    ProductRepository productRepository;

    /* = Constructor = */
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /* = Methods = */
    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> findAll() {
        List<Product> productsAll = productRepository.findAll();
        Collections.shuffle(productsAll);
        return productsAll;
    }

    @Override
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product update(Product product) {
        return product;
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(Long.valueOf(String.valueOf(productRepository.findById(id))));
    }

    public Product findProductByName(String name){
        return productRepository.findProductByProductName(name).orElse(null);
    }

    public Optional<List<String>> getLocations(){
        return productRepository.getLocations();
    }

    public Optional<List<Product>> getProductsByCategory(String category){
        return productRepository.getProductsByCategory(category);
    }

}

