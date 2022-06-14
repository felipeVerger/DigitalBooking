package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.User;
import com.proyecto.proyectInt.repository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements EntityService<User>, UserDetailsService {

    @Autowired
    UserRepository repository;

    Logger logger = LogManager.getLogger(UserService.class);

    @Override
    public Optional<User> findById(Long id) throws ResourceNotFoundException {
        Optional<User> userSearched = repository.findById(id);
        if(userSearched.isPresent()){
            logger.info("Success. User found with id "+id+ ".");
            return userSearched;
        }else{
            logger.error("Attempt failed. The eole you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The eole you are requesting does not exist in our database. Please check input id.");
        }
    }
    @Override
    public User update(User user) throws BadRequestException {
        Optional<User> userSearched = repository.findById(user.getId());
        if (userSearched.isPresent()){
            logger.info("Success. User found and modified.");
            return repository.save(user);
        }else{
            logger.error("Attempt failed. The User you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The User you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<User> findAll() throws ResourceNotFoundException {
        List<User> usersSearched = repository.findAll();
        if (usersSearched.isEmpty()) {
            logger.error("Attempt Failed. No users found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No users found in our database.");
        } else {
            logger.info("Success. Retrieving list of users.");
            return usersSearched;
        }
    }

    @Override
    public User create(User user) throws BadRequestException {
        if (user.getId() != null) {
            logger.error("Attempt failed. This user already exists in our database.");
            throw new BadRequestException("Attempt failed. This user already exists in our database.");
        } else {
            logger.info("Success. New user added to the database.");
            return user;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. User with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. User with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. User with id " + id + " could not be found. Database remains untouched.");
        }
    }

    //additional services

    public Optional<User> findByEmail(String email) throws ResourceNotFoundException {
        Optional<User> userSearched = repository.findByEmail(email);
        if (userSearched.isPresent()) {
            logger.info("Success. User found with email " + userSearched.get().getEmail() + ".");
            return userSearched;
        } else {
            logger.error("Attempt failed. The user you are requesting does not exist in our database. Please check input email");
            throw new ResourceNotFoundException("Attempt failed. The user you are requesting does not exist in our database. Please check input email.");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repository.findByEmail(username);
        if(user.isPresent()){
            return user.get();
        }
        throw new UsernameNotFoundException("Given email does not exist as a registered user.");
    }
}
