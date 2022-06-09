package com.proyecto.proyectInt.service;

import java.util.List;

public interface EntityService <T>{
    /* = Methods = */

    T create(T t);
    List<T> findAll();
    T findById(Integer id);
    T update(T t);
    String delete(Integer id);
}
