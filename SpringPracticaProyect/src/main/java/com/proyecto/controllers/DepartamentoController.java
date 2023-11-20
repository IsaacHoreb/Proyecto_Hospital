package com.proyecto.controllers;

import com.proyecto.Entity.DepartamentosEntity;
import com.proyecto.services.DepartamentoServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/departamentos")
public class DepartamentoController {

    @Autowired
    private DepartamentoServices departamentoServices;

    @PostMapping("/save")
    public ResponseEntity<DepartamentosEntity> saveDepa(@Valid @RequestBody DepartamentosEntity departamentos) throws Exception {
        return departamentoServices.guardarDepartamento(departamentos);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<DepartamentosEntity> getDepaId(@PathVariable("id") Long id) throws Exception {
        return departamentoServices.obtenerDepartamentoId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DepartamentosEntity> updateDepaId(@PathVariable("id") Long id, @Valid @RequestBody DepartamentosEntity detalles) throws Exception {
        return departamentoServices.actualizarDepartamentoID(id, detalles);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDepaId(@PathVariable("id") Long id) throws Exception {
        return departamentoServices.eliminarDepartamentoId(id);
    }

}
