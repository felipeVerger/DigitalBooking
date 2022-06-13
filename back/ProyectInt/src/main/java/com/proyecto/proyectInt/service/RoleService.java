package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.UserRole;
import com.proyecto.proyectInt.repository.RoleRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService implements EntityService<UserRole> {
    @Autowired
    RoleRepository repository;

    Logger logger = LogManager.getLogger(RoleService.class);

    @Override
    public Optional<UserRole> findById(Long id) throws ResourceNotFoundException {
        Optional<UserRole> roleSearched = repository.findById(id);
        if(roleSearched.isPresent()){
            logger.info("Success. Role found with id "+id+ ".");
            return roleSearched;
        }else{
            logger.error("Attempt failed. The eole you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The eole you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public UserRole update(UserRole role) throws BadRequestException {
        Optional<UserRole> roleSearched = repository.findById(role.());
        if (roleSearched.isPresent()){
            logger.info("Success. Role found and modified.");
            return repository.save(role);
        }else{
            logger.error("Attempt failed. The role you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The role you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<UserRole> findAll() throws ResourceNotFoundException {
        List<UserRole> rolesSearched = repository.findAll();
        if (rolesSearched.isEmpty()) {
            logger.error("Attempt Failed. No roles found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No roles found in our database.");
        } else {
            logger.info("Success. Retrieving list of roles.");
            return rolesSearched;
        }
    }

    @Override
    public UserRole create(UserRole role) throws BadRequestException {
        if (role.getId() != null) {
            logger.error("Attempt failed. This role already exists in our database.");
            throw new BadRequestException("Attempt failed. This role already exists in our database.");
        } else {
            logger.info("Success. New role added to the database.");
            return role;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Role with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Role with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Role with id " + id + " could not be found. Database remains untouched.");
        }
    }

}
