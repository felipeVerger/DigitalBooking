package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import com.proyecto.proyectInt.repository.CategoriaRepository;

import java.util.List;
import java.util.Optional;

public class CategoriaService {
    @Autowired
    CategoriaRepository repository;

    public Optional<Categoria> buscar(Long id){
        return repository.findById(id);
    }

    public List<Categoria> buscarTodos(){
        return repository.findAll();
    }

    public Categoria registrarCategoria(Categoria categoria){
        return repository.save(categoria);
    }

    public void eliminarCategoria(Long id) throws ResourceNotFoundException {
        Optional<Categoria> categoriaBuscada= buscar(id);
        if (categoriaBuscada.isPresent()){
            repository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("No es posible eliminar la clase Categoria con id: "+id+", se produjo un error al borrarla");
        }

    }

    public Categoria actualizar(Categoria categoria){
        if (buscar(categoria.getId()).isPresent())
            return repository.save(categoria);
        else
            return null;
    }
}
