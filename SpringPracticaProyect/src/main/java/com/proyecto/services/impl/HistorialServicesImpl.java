package com.proyecto.services.impl;

import com.proyecto.Entity.HistorialEntity;
import com.proyecto.repository.HistorialRepository;
import com.proyecto.services.HistorialServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistorialServicesImpl implements HistorialServices {

    @Autowired
    private HistorialRepository historialRepository;

    @Override
    public ResponseEntity<HistorialEntity> guardarHistorial(HistorialEntity historial) throws Exception {
        HistorialEntity local = historialRepository.save(historial);
        return ResponseEntity.ok(local);
    }

    @Override
    public ResponseEntity<HistorialEntity> obtenerHistorialId(Long id) throws Exception {

        HistorialEntity local = historialRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<HistorialEntity> actualizarHistorialId(Long id, HistorialEntity detallesNuevos) throws Exception {

        HistorialEntity local = historialRepository.findById(id).orElse(null);

        HistorialEntity nuevo;
        if (local != null) {

            local.setDateCreated(detallesNuevos.getDateCreated());
            local.setDiagnoses(detallesNuevos.getDiagnoses());
            local.setTreatments(detallesNuevos.getTreatments());
            local.setMedicalNotes(detallesNuevos.getMedicalNotes());

            nuevo = historialRepository.save(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(nuevo);
    }

    @Override
    public ResponseEntity<String> eliminarHistorialId(Long id) throws Exception {

        HistorialEntity local = historialRepository.findById(id).orElse(null);

        if (local != null) {
            historialRepository.deleteById(id);
            return ResponseEntity.ok().body("El historial con Id: " + id + "\nha sido eliminado con éxito...");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public List<HistorialEntity> listarHistorial() throws Exception {
         return historialRepository.findAll();
    }

}
