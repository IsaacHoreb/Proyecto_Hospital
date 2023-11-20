package com.proyecto.services;

import com.proyecto.Entity.SalasEntity;
import org.springframework.http.ResponseEntity;

public interface SalasServices {

    public ResponseEntity<SalasEntity> guardarSala(SalasEntity salas) throws Exception;

    public ResponseEntity<SalasEntity> obtenerSalaId(Long id) throws Exception;

    public ResponseEntity<SalasEntity> actualizarSalaId(Long id, SalasEntity detallesNuevos) throws Exception;

    public ResponseEntity<String> eliminarSalaId(Long id) throws Exception;

}
