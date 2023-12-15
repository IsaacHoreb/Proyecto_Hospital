package com.proyecto.services.impl;

import com.proyecto.Entity.SalasEntity;
import com.proyecto.Entity.enums.ETipo;
import com.proyecto.repository.SalasRepository;
import com.proyecto.services.SalasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalasServicesImpl implements SalasServices {

    @Autowired
    private SalasRepository salasRepository;

    @Override
    public ResponseEntity<SalasEntity> guardarSala(SalasEntity salas) throws Exception {
        SalasEntity local = salasRepository.save(salas);
        return ResponseEntity.ok(salas);
    }

    @Override
    public ResponseEntity<SalasEntity> obtenerSalaId(Long id) throws Exception {

        SalasEntity local = salasRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<SalasEntity> actualizarSalaId(Long id, SalasEntity detallesNuevos) throws Exception {

        SalasEntity local = salasRepository.findById(id)
                .orElse(null);

        SalasEntity salaNueva; //Variable para los datos nuevos

        //Condicion
        if (local != null) {
            local.setType(detallesNuevos.getType());

            salaNueva = salasRepository.save(local); //Guradamos los cambios
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(salaNueva);
    }

    @Override
    public ResponseEntity<String> eliminarSalaId(Long id) throws Exception {

        SalasEntity local = salasRepository.findById(id)
                .orElse(null);

        if (local != null) {
            salasRepository.deleteById(id);
            return ResponseEntity.ok().body("La sala con id: " + id + "\nha sido eliminada con éxito.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public List<SalasEntity> listarSalas() throws Exception {
       return salasRepository.findAll();
    }

}
