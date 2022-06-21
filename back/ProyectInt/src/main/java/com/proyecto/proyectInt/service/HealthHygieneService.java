package com.proyecto.proyectInt.service;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.HealthHygiene;
import com.proyecto.proyectInt.repository.HealthHygieneRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class HealthHygieneService implements EntityService<HealthHygiene>{
    @Autowired
    HealthHygieneRepository repository;
    private static final Logger logger = LogManager.getLogger(HealthHygieneService.class);
    @Override
    public HealthHygiene create(HealthHygiene hygiene) throws BadRequestException {
        if (hygiene.getId() != null){
            logger.error("Attempt failed. This healthHygiene already exists in our database.");
            throw new BadRequestException("Attempt failed. This healthHygiene already exists in our database.");
        }else{
            logger.info("Success. New healthHygiene added to the database");
            return repository.save(hygiene);
        }
    }
    @Override
    public List<HealthHygiene> findAll() throws ResourceNotFoundException {
        List<HealthHygiene> hhSearched = repository.findAll();
        if (hhSearched.isEmpty()) {
            logger.error("Attempt Failed. No healthHygiene found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No healthHygiene found in our database.");
        } else {
            logger.info("Success. Retrieving list of healthHygiene.");
            return hhSearched;
        }
    }
    @Override
    public Optional<HealthHygiene> findById(Long id) throws ResourceNotFoundException {
        Optional<HealthHygiene> hhSearched = repository.findById(id);
        if(hhSearched.isPresent()){
            logger.info("Success. healthHygiene found with id "+id+ ".");
            return hhSearched;
        }else{
            logger.error("Attempt failed. The healthHygiene you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The healthHygiene you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public HealthHygiene update(HealthHygiene hygiene) throws BadRequestException {
        Optional<HealthHygiene> hhSearched = repository.findById(hygiene.getId());
        if (hhSearched.isPresent()){
            logger.info("Success. healthHygiene found and modified.");
            return repository.save(hygiene);
        }else{
            logger.error("Attempt failed. The healthHygiene you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The healthHygiene you are requesting does not exist in our database. Please check spelling.");
        }
    }
    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. healthHygiene with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. healthHygiene with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. healthHygiene with id " + id + " could not be found. Database remains untouched.");
        }
    }
}