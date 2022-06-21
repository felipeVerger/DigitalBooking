package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

public interface EntityService <T>{
    /* = Methods = */

    T create(T t) throws BadRequestException;
    List<T> findAll() throws ResourceNotFoundException;
    Optional<T> findById(Long id) throws ResourceNotFoundException;
    T update(T t) throws BadRequestException;
    void delete(Long id) throws ResourceNotFoundException;
}
