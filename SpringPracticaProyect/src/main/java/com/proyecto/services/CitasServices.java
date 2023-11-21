package com.proyecto.services;

import com.proyecto.Entity.CitasEntity;
import org.springframework.http.ResponseEntity;

public interface CitasServices {

    public ResponseEntity<CitasEntity> guardarCitas(CitasEntity citas) throws Exception;

    public ResponseEntity<CitasEntity> obtenerCitaId(Long id) throws Exception;

    public ResponseEntity<CitasEntity> actualizarCitaId(Long id, CitasEntity detallesNuevos) throws Exception;

    public ResponseEntity<String> eliminarCitaId(Long id) throws Exception;

}
