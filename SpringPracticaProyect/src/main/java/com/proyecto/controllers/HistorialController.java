package com.proyecto.controllers;

import com.proyecto.Entity.HistorialEntity;
import com.proyecto.services.HistorialServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") //Permite el intercambio de recursos entre API
@RestController
@RequestMapping(path = "/historial")
public class HistorialController {

    @Autowired
    private HistorialServices historialServices;

    @PostMapping("/save")
    public ResponseEntity<HistorialEntity> saveHistorial(@Valid @RequestBody HistorialEntity historial) throws Exception {
        return historialServices.guardarHistorial(historial);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<HistorialEntity> getHistorialId(@PathVariable("id") Long id) throws Exception {
        return historialServices.obtenerHistorialId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<HistorialEntity> updateHistorialId(@PathVariable("id") Long id, @Valid @RequestBody HistorialEntity detalles) throws Exception {
        return historialServices.actualizarHistorialId(id, detalles);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteHistorialId(@PathVariable("id") Long id) throws Exception {
        return historialServices.eliminarHistorialId(id);
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<HistorialEntity>> listHistorial() throws Exception{
        List<HistorialEntity> listarHistorial = historialServices.listarHistorial();

        if (listarHistorial.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listarHistorial);

    }


}
