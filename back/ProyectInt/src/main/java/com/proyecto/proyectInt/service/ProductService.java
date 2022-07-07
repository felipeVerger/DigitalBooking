package com.proyecto.proyectInt.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.model.*;
import com.proyecto.proyectInt.model.DTO.ProductDTO;
import com.proyecto.proyectInt.repository.ProductRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
@Service
public class ProductService implements EntityService<ProductDTO> {
    /* = Attributes = */
    @Autowired
    ProductRepository productRepository;
    final private ObjectMapper mapper;
    private static final Logger logger = LogManager.getLogger(ProductService.class);

    /* = Constructor = */
    @Autowired
    public ProductService(ProductRepository productRepository, ObjectMapper mapper) {
        this.productRepository = productRepository;
        this.mapper = mapper;
    }
    /* = Methods = */
    public ProductDTO create(ProductDTO product) throws BadRequestException {
        if (product.getId() != null){
            logger.error("Attempt failed. This product already exists in our database.");
            throw new BadRequestException("Attempt failed. This product already exists in our database.");
        }else{
            logger.info("Success. New product added to the database.");
            productRepository.save(mapper.convertValue(product, Product.class));
            return product;
        }
    }
    @Override
    public List<ProductDTO> findAll(){
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productsDto = new ArrayList<>();

        for (Product product : products) {
            productsDto.add(mapper.convertValue(product, ProductDTO.class));
        }
        Collections.shuffle(productsDto);
        return productsDto;
    }

    public Optional<ProductDTO> findById(Long id) {
        logger.info("Search product by id");
        ProductDTO product = null;
        Optional<Product> productFound = productRepository.findById(id);
        if (productFound.isPresent()) {
            product = mapper.convertValue(productFound, ProductDTO.class);
        }
        return Optional.ofNullable(product);
    }
    public ProductDTO update(ProductDTO product) {
        Product productRepo = productRepository.findById(product.getId()).get();
        productRepo.setName(product.getName());
        productRepo.setDescription(product.getDescription());
        productRepo.setCity(product.getCity());
        productRepo.setCategory(product.getCategory());
        productRepo.setAddress(product.getAddress());
        productRepo.setLatitude(product.getLatitude());
        productRepo.setLongitude(product.getLongitude());
        productRepo.setScore(product.getScore());
        productRepo.setFeatures(product.getFeatures());
        productRepo.setImages(product.getImages());
        productRepository.save(productRepo);
        return mapper.convertValue(product, ProductDTO.class);
    }

    public void delete(Long id) {
        if(productRepository.findById(id).isPresent()){
            productRepository.deleteById(id);
            logger.info("Product has been deleted correctly!");
            System.out.println("Product has been deleted correctly!");
        } else {
            logger.error("Product not found!");
            System.out.println("Product not found!");
        }
    }

    public ProductDTO findProductByName(String name) {
        logger.info("Search product by name");

        ProductDTO productDTO = null;
        Optional<Product> prod = productRepository.findProductByProductName(name);
        if(prod.isPresent()) {
            productDTO = mapper.convertValue(prod, ProductDTO.class);
        }
        return productDTO;
    }

    public List<Product> listProductsByCity(String name){
        logger.info("List all products filtered by city");
        return productRepository.getProductsByCity(name);

    }

    public List<Product> listProductsByCategory(String title){
        logger.info("List all products filtered by category");
        return productRepository.getProductsByCategory(title);
    }

    public List<Product> listProductsByScore(int score){
        logger.info("List all products filtered by score");
        return productRepository.filterByScore(score);
    }

    public List<Product> findProductsByDatesAndCity(LocalDate startDate, LocalDate endDate, String city){
        logger.info("List all products filtered by dates and city");
        return productRepository.findProductsByDatesAndCity(startDate, endDate, city);
    }

    public List<Product> findProductsByCategoryAndCity(String category, String city){
        logger.info("List all products filtered by dates and city");
        return productRepository.findProductsByCategoryAndCity(category, city);
    }

    public List<Product> findProductsByDatesAndCityAndCategory(LocalDate startDate, LocalDate endDate, String city, String category){
        logger.info("List all products filtered by dates and city");
        return productRepository.findProductsByDatesAndCityAndCategory(startDate, endDate, city, category);
    }



}