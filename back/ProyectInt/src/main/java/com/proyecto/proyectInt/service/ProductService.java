package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.model.Product;
import com.proyecto.proyectInt.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements EntityService<Product>{

    /* = Attributes = */
    private final ProductRepository productRepository;

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
        return productRepository.findAll();
    }

    @Override
    public Product findById(Integer id) {
        return productRepository.findById(Long.valueOf(id)).orElse(null);
    }

    @Override
    public Product update(Product product) {
        return product;
    }

    @Override
    public String delete(Integer id) {
        if(productRepository.findById(Long.valueOf(id)).isPresent()){
            productRepository.deleteById(Long.valueOf(id));
            return "Product with id: " + id + " was deleted";
        }else{
            return "Product with id:" + id + " don't exist";
        }
    }

    public Product findProductByName(String name){
        return productRepository.findProductByProductName(name).orElse(null);
    }

    public List<String> getLocations(){
        return productRepository.getLocations();
    }

    public List<Product> getProductsByCategory(String category){
        return productRepository.getProductsByCategory(category);
    }

}

