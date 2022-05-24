package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Categoria;
import com.proyecto.proyectInt.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService service;

    @GetMapping
    public List<Categoria> buscarCategorias(){
        return service.buscarTodos();
    }

    @PostMapping
    public Categoria registrarCategoria(@RequestBody Categoria categoria){
        return service.registrarCategoria(categoria);
    }
    @PutMapping
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria){
        Categoria categoriaActualizada=service.actualizar(categoria);
        if (categoriaActualizada!=null){
            return ResponseEntity.ok(categoriaActualizada);
        }
        else{

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoria(@PathVariable Long id){
        Optional<Categoria> categoriaActualizada=service.buscar(id);
        if(categoriaActualizada.isPresent()){
            return ResponseEntity.ok(categoriaActualizada.get());
        }
        else {

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarOdontologo(@PathVariable Long id) throws ResourceNotFoundException {
        service.eliminarCategoria(id);
        return ResponseEntity.ok("Odontologo deleteado");

    }
}
