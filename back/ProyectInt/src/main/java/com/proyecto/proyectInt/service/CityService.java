package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;

import com.proyecto.proyectInt.model.Category;
import com.proyecto.proyectInt.model.City;

import com.proyecto.proyectInt.repository.CityRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService implements EntityService<City>{

    @Autowired
    CityRepository repository;

    Logger logger = LogManager.getLogger(CityService.class);

    @Override
    public Optional<City> findById(Long id) throws ResourceNotFoundException {
        Optional<City> citySearched = repository.findById(id);
        if(citySearched.isPresent()){
            logger.info("Success. City found with id "+id+ ".");
            return citySearched;
        }else{
            logger.error("Attempt failed. The city you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The city you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public City update(City city) throws BadRequestException{
        Optional<City> citySearched = repository.findById(city.getId());
        if (citySearched.isPresent()){
            logger.info("Success. City found and modified.");
            return repository.save(city);
        }else{
            logger.error("Attempt failed. The city you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The city you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<City> findAll() throws ResourceNotFoundException {
        List<City> citiesSearched = repository.findAll();
        if (citiesSearched.isEmpty()) {
            logger.error("Attempt Failed. No cities found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No cities found in our database.");
        } else {
            logger.info("Success. Retrieving list of cities.");
            return citiesSearched;
        }
    }

    @Override
    public City create(City city) throws BadRequestException {
        if (city.getId() != null) {
            logger.error("Attempt failed. This city already exists in our database.");
            throw new BadRequestException("Attempt failed. This city already exists in our database.");
        } else {
            logger.info("Success. New city added to the database.");
            return repository.save(city);
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. City with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. City with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. City with id " + id + " could not be found. Database remains untouched.");
        }
    }

    //additional services

    public Optional<City> findByCity(String city) throws ResourceNotFoundException {
        Optional<City> citySearched = repository.findByCity(city);
        if (citySearched.isPresent()) {
            logger.info("Success. City found with title " + city + ".");
            return citySearched;
        } else {
            logger.error("Attempt failed. The city you are requesting does not exist in our database. Please check input name");
            throw new ResourceNotFoundException("Attempt failed. The city you are requesting does not exist in our database. Please check input name.");
        }
    }


}