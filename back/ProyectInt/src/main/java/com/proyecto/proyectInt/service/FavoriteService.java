package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Favorite;
import com.proyecto.proyectInt.repository.FavoriteRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService implements EntityService<Favorite> {
    @Autowired
    FavoriteRepository repository;

    Logger logger = LogManager.getLogger(FavoriteService.class);

    @Override
    public Optional<Favorite> findById(Long id) throws ResourceNotFoundException {
        Optional<Favorite> favoriteSearched = repository.findById(id);
        if(favoriteSearched.isPresent()){
            logger.info("Success. Favorite found with id "+id+ ".");
            return favoriteSearched;
        }else{
            logger.error("Attempt failed. The favorite you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The favorite you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public Favorite update(Favorite favorite) throws BadRequestException {
        Optional<Favorite> favoriteSearched = repository.findById(favorite.getId());
        if (favoriteSearched.isPresent()){
            logger.info("Success. Favorite found and modified.");
            return repository.save(favorite);
        }else{
            logger.error("Attempt failed. The favorite you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The favorite you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<Favorite> findAll() throws ResourceNotFoundException {
        List<Favorite> favoritesSearched = repository.findAll();
        if (favoritesSearched.isEmpty()) {
            logger.error("Attempt Failed. No favorites found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No favorites found in our database.");
        } else {
            logger.info("Success. Retrieving list of favorites.");
            return favoritesSearched;
        }
    }

    @Override
    public Favorite create(Favorite favorite) throws BadRequestException {
        if (favorite.getId() != null) {
            logger.error("Attempt failed. This favorite already exists in our database.");
            throw new BadRequestException("Attempt failed. This favorite already exists in our database.");
        } else {
            logger.info("Success. New favorite added to the database.");
            return favorite;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Favorite with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Favorite with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Favorite with id " + id + " could not be found. Database remains untouched.");
        }
    }

    //additional services

    public List<Favorite> findByUserId(Long id) throws ResourceNotFoundException {
        List<Favorite> favoritesSearched = repository.findByUserId(id);
        if (favoritesSearched.isEmpty()) {
            logger.error("Attempt Failed. No favorites found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No favorites found.");
        } else {
            logger.info("Success. Retrieving list of favorites.");
            return favoritesSearched;
        }
    }

    public List<Favorite> findByProductId(Long id) throws ResourceNotFoundException {
        List<Favorite> favoritesSearched = repository.findByProductId(id);
        if (favoritesSearched.isEmpty()) {
            logger.error("Attempt Failed. No favorites found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No favorites found.");
        } else {
            logger.info("Success. Retrieving list of favorites.");
            return favoritesSearched;
        }
    }

    public List<Favorite> findByUserIdAndProductId (Long userId, Long productId) throws ResourceNotFoundException {
        List<Favorite> favoritesSearched = repository.findByUserIdAndProductId(userId, productId);
        if (favoritesSearched.isEmpty()) {
            logger.error("Attempt Failed. No favorites found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No favorites found.");
        } else {
            logger.info("Success. Retrieving list of favorites.");
            return favoritesSearched;
        }
    }
}
