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

    /* = Attribute = */
    private final CategoriaService service;

    /* = Get = */
    @GetMapping
    public List<Categoria> buscarCategorias(){
        return service.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoria(@PathVariable Long id){
        Optional<Categoria> categoriaActualizada=service.buscar(id);
        return categoriaActualizada.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /* = Post = */
    @PostMapping
    public Categoria registrarCategoria(@RequestBody Categoria categoria){
        return service.registrarCategoria(categoria);
    }


    /* = Update = */
    @PutMapping("/update")
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria){
        Categoria categoriaActualizada=service.actualizar(categoria);
        if (categoriaActualizada!=null){
            return ResponseEntity.ok(categoriaActualizada);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    /* = Delete = */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        service.eliminarCategoria(id);
        return ResponseEntity.ok("Categoria eliminada");

    }

    /* = Constructor = */

    @Autowired
    public CategoriaController(CategoriaService service) {
        this.service = service;
    }
}
