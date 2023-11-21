package com.proyecto.services;

import com.proyecto.Entity.HistorialEntity;
import org.springframework.http.ResponseEntity;

public interface HistorialServices {

    public ResponseEntity<HistorialEntity> guardarHistorial(HistorialEntity historial) throws Exception;

    public ResponseEntity<HistorialEntity> obtenerHistorialId(Long id) throws Exception;

    public ResponseEntity<HistorialEntity> actualizarHistorialId(Long id, HistorialEntity detallesNuevos) throws Exception;

    public ResponseEntity<String> eliminarHistorialId(Long id) throws Exception;

}
