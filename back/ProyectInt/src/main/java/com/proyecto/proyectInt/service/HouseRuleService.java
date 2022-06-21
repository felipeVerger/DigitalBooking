package com.proyecto.proyectInt.service;
import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.HouseRule;
import com.proyecto.proyectInt.repository.HouseRuleRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class HouseRuleService implements EntityService<HouseRule>{
    @Autowired
    HouseRuleRepository repository;
    private static final Logger logger = LogManager.getLogger(HouseRuleService.class);
    @Override
    public HouseRule create(HouseRule houseRule) throws BadRequestException {
        if (houseRule.getId() != null){
            logger.error("Attempt failed. This houseRule already exists in our database.");
            throw new BadRequestException("Attempt failed. This houseRule already exists in our database.");
        }else{
            logger.info("Success. New houseRule added to the database");
            return repository.save(houseRule);
        }
    }
    @Override
    public List<HouseRule> findAll() throws ResourceNotFoundException {
        List<HouseRule> hrSearched = repository.findAll();
        if (hrSearched.isEmpty()) {
            logger.error("Attempt Failed. No HouseRules found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No HouseRules found in our database.");
        } else {
            logger.info("Success. Retrieving list of HouseRules.");
            return hrSearched;
        }
    }
    @Override
    public Optional<HouseRule> findById(Long id) throws ResourceNotFoundException {
        Optional<HouseRule> hrSearched = repository.findById(id);
        if(hrSearched.isPresent()){
            logger.info("Success. HouseRule found with id "+id+ ".");
            return hrSearched;
        }else{
            logger.error("Attempt failed. The HouseRule you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The HouseRule you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public HouseRule update(HouseRule houseRule) throws BadRequestException {
        Optional<HouseRule> hrSearched = repository.findById(houseRule.getId());
        if (hrSearched.isPresent()){
            logger.info("Success. HouseRule found and modified.");
            return repository.save(houseRule);
        }else{
            logger.error("Attempt failed. The HouseRule you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The HouseRule you are requesting does not exist in our database. Please check spelling.");
        }
    }
    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. HouseRule with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. HouseRule with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. HouseRule with id " + id + " could not be found. Database remains untouched.");
        }
    }
}