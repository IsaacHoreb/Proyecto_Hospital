package com.proyecto.services.impl;

import com.proyecto.Entity.PacienteEntity;
import com.proyecto.repository.PacienteRepository;
import com.proyecto.services.PacienteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteServicesImpl implements PacienteServices {

    @Autowired
    private PacienteRepository pacienteRepository;

    @Override
    public ResponseEntity<PacienteEntity> guardarPaciente(PacienteEntity paciente) throws Exception {

        //Obtener el nombre y el apellido
        PacienteEntity existPaciente = pacienteRepository.findByNameAndLastName(paciente.getName(), paciente.getLastName())
                .orElse(null);

        PacienteEntity pacienteNuevo = null; //Guardar los datos creados

        //Condicion
        if (existPaciente == null) {
            pacienteNuevo = pacienteRepository.save(paciente);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(pacienteNuevo);

    }

    @Override
    public ResponseEntity<PacienteEntity> obtenerPacienteId(Long id) throws Exception {

        PacienteEntity local = pacienteRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<PacienteEntity> actualizarPacienteId(Long id, PacienteEntity detallesNuevos) throws Exception {

        //Buscamos la existencia
        PacienteEntity local = pacienteRepository.findById(id).orElse(null);

        PacienteEntity pacienteNuevo;
        if (local != null) {

            //Agregamos los datos nuevos
            local.setName(detallesNuevos.getName());
            local.setLastName(detallesNuevos.getLastName());
            local.setDateBirth(detallesNuevos.getDateBirth());
            local.setGenero(detallesNuevos.getGenero());
            local.setAddress(detallesNuevos.getAddress());
            local.setPhone(detallesNuevos.getPhone());
            local.setMedicalHistory(detallesNuevos.getMedicalHistory());

            pacienteNuevo = pacienteRepository.save(local); //Guardamos

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(pacienteNuevo);

    }

    @Override
    public ResponseEntity<String> eliminarPacienteId(Long id) throws Exception {

        //Buscamos la existencia
        PacienteEntity local = pacienteRepository.findById(id).orElse(null);

        if (local != null) {
            pacienteRepository.deleteById(id);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Este paciente no se encontró\nIngrese otro...");
        }

        return ResponseEntity.ok("El paciente con id: " + id + "\nha sido eliminado con éxito...");
    }

    @Override
    public List<PacienteEntity> listarPacientes() throws Exception {
        return pacienteRepository.findAll();
    }
}
