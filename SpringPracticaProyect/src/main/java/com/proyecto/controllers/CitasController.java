package com.proyecto.controllers;

import com.proyecto.Entity.CitasEntity;
import com.proyecto.services.CitasServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") //Permite el intercambio de recursos entre API
@RestController
@RequestMapping(path = "/citas")
public class CitasController {

    @Autowired
    private CitasServices citasServices;

    @PostMapping("/save")
    public ResponseEntity<CitasEntity> saveCitas(@Valid @RequestBody CitasEntity citas) throws Exception {
        return citasServices.guardarCitas(citas);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CitasEntity> getCitasId(@PathVariable("id") Long id) throws Exception {
        return citasServices.obtenerCitaId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CitasEntity> updateCitasId(@PathVariable("id") Long id, @Valid @RequestBody CitasEntity detalles) throws Exception {
        return citasServices.actualizarCitaId(id, detalles);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCitasId(@PathVariable("id") Long id) throws Exception {
        return citasServices.eliminarCitaId(id);
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<CitasEntity>> listarCitas() throws Exception{
        List<CitasEntity> listarCitas = citasServices.listarCitas();

        if (listarCitas.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listarCitas);
    }

}
