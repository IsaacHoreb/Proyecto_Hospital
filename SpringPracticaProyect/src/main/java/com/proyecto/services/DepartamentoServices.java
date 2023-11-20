package com.proyecto.services;

import com.proyecto.Entity.DepartamentosEntity;
import org.springframework.http.ResponseEntity;

public interface DepartamentoServices {

    public ResponseEntity<DepartamentosEntity> guardarDepartamento(DepartamentosEntity departamentos) throws Exception;

    public ResponseEntity<DepartamentosEntity> obtenerDepartamentoId(Long id) throws Exception;

    public ResponseEntity<DepartamentosEntity> actualizarDepartamentoID(Long id, DepartamentosEntity detallesNuevo) throws Exception;

    public ResponseEntity<String> eliminarDepartamentoId(Long id) throws Exception;

}
