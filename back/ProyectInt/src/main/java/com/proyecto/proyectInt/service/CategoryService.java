package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Category;
import com.proyecto.proyectInt.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategoryService {
    private final CategoryRepository repository;

    @Autowired
    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public Optional<Category> search(Long id) throws ResourceNotFoundException {
        Optional<Category> categorySearched = repository.findById(id);
        if(categorySearched.isPresent()){
            return categorySearched;
        }else{
            throw new ResourceNotFoundException("Could not find the category with id: "+id+", there was an error.");
        }
    }

    public List<Category> searchAll() throws BadRequestException {
        List<Category> categories = repository.findAll();
        if(categories.isEmpty()){
            throw new BadRequestException("There are no registered categories");
        }else{
            return categories;
        }

    }

    public Category categorySave(Category category) throws BadRequestException{
        Optional<Category> searchedCategory = repository.findById(category.getId());
        if(searchedCategory.isPresent()) {
            throw new BadRequestException("There is already a category with id: " + category.getId() + ".");
        }else {

            return repository.save(category);
        }
    }

    public void categoryDelete(Long id) throws ResourceNotFoundException {
        Optional<Category> categorySearched= search(id);
        if (categorySearched.isPresent()){
            repository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("It is not possible to remove the Category class with id: "+id+", there was an error");
        }

    }

    public Category toUpdate(Category category) throws ResourceNotFoundException {
        Optional<Category> categorySearched = search(category.getId());
        if (categorySearched.isPresent())
            return repository.save(category);
        else
            return null;
    }

}
