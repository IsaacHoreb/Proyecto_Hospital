package com.proyecto.controllers;

import com.proyecto.Entity.MedicoEntity;
import com.proyecto.services.MedicoServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") //Permite el intercambio de recursos entre API
@RestController
@RequestMapping(path = "/doctor")
public class MedicoController {

    @Autowired
    private MedicoServices medicoServices;

    @PostMapping("/save")
    public ResponseEntity<MedicoEntity> saveDoctor(@Valid @RequestBody MedicoEntity medico) throws Exception {
        return medicoServices.guardarMedico(medico);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<MedicoEntity> getDoctorId(@PathVariable("id") Long id) throws Exception {
        return medicoServices.obtenerMedicoId(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MedicoEntity> updateDoctorId(@PathVariable("id") Long id, @Valid @RequestBody MedicoEntity detalles) throws Exception {
        return medicoServices.actualizarMedicoId(id, detalles);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDoctorId(@PathVariable("id") Long id) throws Exception {
        return medicoServices.eliminarMedicoId(id);
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<MedicoEntity>> listAllMedico() throws Exception {
        List<MedicoEntity> listDoctor = medicoServices.listarMedicos();

        if (listDoctor.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listDoctor);

    }


}
