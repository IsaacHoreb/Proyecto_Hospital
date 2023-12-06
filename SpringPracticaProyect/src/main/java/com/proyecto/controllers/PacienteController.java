package com.proyecto.controllers;

import com.proyecto.Entity.PacienteEntity;
import com.proyecto.services.PacienteServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") //Permite el intercambio de recursos entre API
@RestController
@RequestMapping(path = "/paciente")
public class PacienteController {

    @Autowired
    private PacienteServices pacienteServices;

    @PostMapping("/save")
    public ResponseEntity<PacienteEntity> guardarPaciente(@Valid @RequestBody PacienteEntity paciente) throws Exception {
        return pacienteServices.guardarPaciente(paciente);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PacienteEntity> obtenerPacienteId(@PathVariable("id") Long id) throws Exception {
        return pacienteServices.obtenerPacienteId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PacienteEntity> actualizarPacienteId(@PathVariable("id") Long id, @Valid @RequestBody PacienteEntity detalles) throws Exception {
        return pacienteServices.actualizarPacienteId(id, detalles);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> eliminarPacienteId(@PathVariable("id") Long id) throws Exception {
        return pacienteServices.eliminarPacienteId(id);
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<PacienteEntity>> listarPacientes() throws Exception {
        List<PacienteEntity> listPaciente = pacienteServices.listarPacientes();

        if (listPaciente.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listPaciente);
    }


}
