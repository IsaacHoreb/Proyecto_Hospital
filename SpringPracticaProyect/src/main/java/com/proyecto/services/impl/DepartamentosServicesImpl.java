package com.proyecto.services.impl;

import com.proyecto.Entity.DepartamentosEntity;
import com.proyecto.repository.DepartamentoRepository;
import com.proyecto.services.DepartamentoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DepartamentosServicesImpl implements DepartamentoServices {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Override
    public ResponseEntity<DepartamentosEntity> guardarDepartamento(DepartamentosEntity departamentos) throws Exception {

        //Agregamos para buscar si existe
        DepartamentosEntity local = departamentoRepository.findByNameDepartment(departamentos.getNameDepartment())
                .orElse(null);

        //Condicion
        DepartamentosEntity departamentosNuevo;
        if (local == null) {
            departamentosNuevo = departamentoRepository.save(departamentos);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(departamentosNuevo); //Devolver el valor
    }

    @Override
    public ResponseEntity<DepartamentosEntity> obtenerDepartamentoId(Long id) throws Exception {

        DepartamentosEntity local = departamentoRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<DepartamentosEntity> actualizarDepartamentoID(Long id, DepartamentosEntity detallesNuevo) throws Exception {

        //Almacenamos el los datos por el id
        DepartamentosEntity local = departamentoRepository.findById(id).orElse(null);
        DepartamentosEntity departamentoNuevo; //Variable para guardar los nuevos datos

        //Condicion
        if (local != null) {

            local.setNameDepartment(detallesNuevo.getNameDepartment());
            local.setDescription(detallesNuevo.getDescription());

            departamentoNuevo = departamentoRepository.save(local); //Guardamos

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(departamentoNuevo); //Devolver los valores nuevos
    }

    @Override
    public ResponseEntity<String> eliminarDepartamentoId(Long id) throws Exception {

        //Almacenamos el los datos por el id
        DepartamentosEntity local = departamentoRepository.findById(id).orElse(null);

        if (local != null) {
            departamentoRepository.deleteById(id);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok().body("El departamento con id: " + id + "\nha sido eliminado con éxito...");
    }
}
