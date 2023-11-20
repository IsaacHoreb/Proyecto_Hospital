package com.proyecto.controllers;

import com.proyecto.Entity.SalasEntity;
import com.proyecto.services.SalasServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/salas")
public class SalaController {

    @Autowired
    private SalasServices salasServices;

    @PostMapping("/save")
    public ResponseEntity<SalasEntity> saveSala(@Valid @RequestBody SalasEntity sala) throws Exception {
        return salasServices.guardarSala(sala);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<SalasEntity> getSalaId(@PathVariable("id") Long id) throws Exception {
        return salasServices.obtenerSalaId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SalasEntity> updateSalaId(@PathVariable("id") Long id, @Valid @RequestBody SalasEntity detalles) throws Exception {
        return salasServices.actualizarSalaId(id, detalles);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSalaId(@PathVariable("id") Long id) throws Exception {
        return salasServices.eliminarSalaId(id);
    }

}
