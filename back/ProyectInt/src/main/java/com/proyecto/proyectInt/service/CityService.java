package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;

import com.proyecto.proyectInt.model.City;

import com.proyecto.proyectInt.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    private final CityRepository repository;

    @Autowired
    public CityService(CityRepository repository) {
        this.repository = repository;
    }

    public Optional<City> search(Long id) throws ResourceNotFoundException {
        Optional<City> citySearched = repository.findById(id);
        if(citySearched.isPresent()){
            return citySearched;
        }else{
            throw new ResourceNotFoundException("Could not find the city with id: "+id+", there was an error.");
        }
    }

    public List<City> searchAll() throws BadRequestException {
        List<City> cities = repository.findAll();
        if(cities.isEmpty()){
            throw new BadRequestException("There are no registered cities");
        }else{
            return cities;
        }

    }

    public City citySave(City city) throws BadRequestException{
        Optional<City> searchedCity= repository.findById(city.getId());
        if(searchedCity.isPresent()) {
            throw new BadRequestException("There is already a city with id: " + city.getId() + ".");
        }else {

            return repository.save(city);
        }
    }

    public void cityDelete(Long id) throws ResourceNotFoundException {
        Optional<City> citySearched= search(id);
        if (citySearched.isPresent()){
            repository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("It is not possible to remove the city class with id: "+id+", there was an error");
        }

    }

    public City toUpdate(City city) throws ResourceNotFoundException {
        Optional<City> citySearched = search(city.getId());
        if (citySearched.isPresent())
            return repository.save(city);
        else
            return null;
    }

}