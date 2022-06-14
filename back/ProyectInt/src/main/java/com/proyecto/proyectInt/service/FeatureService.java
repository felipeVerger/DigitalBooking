package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Feature;
import com.proyecto.proyectInt.repository.FeatureRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureService implements EntityService<Feature> {
    @Autowired
    FeatureRepository repository;

    Logger logger = LogManager.getLogger(FeatureService.class);

    @Override
    public Optional<Feature> findById(Long id) throws ResourceNotFoundException {
        Optional<Feature> featureSearched = repository.findById(id);
        if(featureSearched.isPresent()){
            logger.info("Success. Feature found with id "+id+ ".");
            return featureSearched;
        }else{
            logger.error("Attempt failed. The feature you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The feature you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public Feature update(Feature feature) throws BadRequestException {
        Optional<Feature> featureSearched = repository.findById(feature.getId());
        if (featureSearched.isPresent()){
            logger.info("Success. Feature found and modified.");
            return repository.save(feature);
        }else{
            logger.error("Attempt failed. The feature you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The feature you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<Feature> findAll() throws ResourceNotFoundException {
        List<Feature> featuresSearched = repository.findAll();
        if (featuresSearched.isEmpty()) {
            logger.error("Attempt Failed. No features found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No features found in our database.");
        } else {
            logger.info("Success. Retrieving list of features.");
            return featuresSearched;
        }
    }

    @Override
    public Feature create(Feature Feature) throws BadRequestException {
        if (Feature.getId() != null) {
            logger.error("Attempt failed. This Feature already exists in our database.");
            throw new BadRequestException("Attempt failed. This Feature already exists in our database.");
        } else {
            logger.info("Success. New Feature added to the database.");
            return Feature;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Feature with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Feature with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Feature with id " + id + " could not be found. Database remains untouched.");
        }
    }

    //additional services

    public Optional<Feature> findByName(String name) throws ResourceNotFoundException {
        Optional<Feature> featureSearched = repository.findByName(name);
        if (featureSearched.isPresent()) {
            logger.info("Success. Feature found with title " + featureSearched.get().getName() + ".");
            return featureSearched;
        } else {
            logger.error("Attempt failed. The feature you are requesting does not exist in our database. Please check input name");
            throw new ResourceNotFoundException("Attempt failed. The feature you are requesting does not exist in our database. Please check input name.");
        }
    }
}
