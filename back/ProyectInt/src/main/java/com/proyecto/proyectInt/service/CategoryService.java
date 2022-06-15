package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Category;
import com.proyecto.proyectInt.model.City;
import com.proyecto.proyectInt.repository.CategoryRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategoryService implements EntityService<Category> {

    @Autowired
    CategoryRepository repository;

    private static final Logger logger = LogManager.getLogger(CategoryService.class);


    @Override
    public Optional<Category> findById(Long id) throws ResourceNotFoundException {
        Optional<Category> categorySearched = repository.findById(id);
        if (categorySearched.isPresent()) {
            logger.info("Success. Category found with id " + id + ".");
            return categorySearched;
        } else {
            logger.error("Attempt failed. The category you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The category you are requesting does not exist in our database. Please check input id.");
        }

    }

    @Override
    public Category update(Category category) throws BadRequestException {
        Optional<Category> categorySearched = repository.findById(category.getId());
        if (categorySearched.isPresent()) {
            logger.info("Success. Category found and modified.");
            return repository.save(category);
        } else {
            logger.error("Attempt failed. The category you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The category you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<Category> findAll() throws ResourceNotFoundException {
        List<Category> categoriesSearched = repository.findAll();
        if (categoriesSearched.isEmpty()) {
            logger.error("Attempt Failed. No categories found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No categories found in our database.");
        } else {
            logger.info("Success. Retrieving list of categories.");
            return categoriesSearched;
        }
    }

    @Override
    public Category create(Category category) throws BadRequestException {
        if (category.getId() != null) {
            logger.error("Attempt failed. This category already exists in our database.");
            throw new BadRequestException("Attempt failed. This category already exists in our database.");
        } else {
            logger.info("Success. New category added to the database.");
            return repository.save(category);
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Category with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Category with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Category with id " + id + " could not be found. Database remains untouched.");
        }
    }


    //additional services

    public Optional<Category> findByTitle(String title) throws ResourceNotFoundException{
        Optional<Category> categorySearched = repository.findByTitle(title);
        if (categorySearched.isPresent()) {
            logger.info("Success. Category found with title " + categorySearched.get().getTitle() + ".");
            return categorySearched;
        } else {
            logger.error("Attempt failed. The category you are requesting does not exist in our database. Please check input title");
            throw new ResourceNotFoundException("Attempt failed. The category you are requesting does not exist in our database. Please check input title.");
        }
    }


}
