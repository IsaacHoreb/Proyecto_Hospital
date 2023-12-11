package com.proyecto.services.impl;

import com.proyecto.Entity.CitasEntity;
import com.proyecto.repository.CitasRepository;
import com.proyecto.services.CitasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitasServicesImpl implements CitasServices {

    @Autowired
    private CitasRepository citasRepository;

    @Override
    public ResponseEntity<CitasEntity> guardarCitas(CitasEntity citas) throws Exception {
        CitasEntity local = citasRepository.save(citas);
        return ResponseEntity.ok(local);
    }

    @Override
    public ResponseEntity<CitasEntity> obtenerCitaId(Long id) throws Exception {

        CitasEntity local = citasRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<CitasEntity> actualizarCitaId(Long id, CitasEntity detallesNuevos) throws Exception {

        CitasEntity local = citasRepository.findById(id).orElse(null);

        CitasEntity nuevo;

        if (local != null) {

            local.setDate(detallesNuevos.getDate());
            local.setHour(detallesNuevos.getHour());
            local.setMotive(detallesNuevos.getMotive());
            local.setStated(detallesNuevos.getStated());

            nuevo = citasRepository.save(local);

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(nuevo);
    }

    @Override
    public ResponseEntity<String> eliminarCitaId(Long id) throws Exception {
        CitasEntity local = citasRepository.findById(id).orElse(null);

        if (local != null) {
            citasRepository.deleteById(id);
            return ResponseEntity.ok().body("La cita con Id: " + id + "\nha sido eliminado con éxito...");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @Override
    public List<CitasEntity> listarCitas() throws Exception {
        return citasRepository.findAll();
    }

}
