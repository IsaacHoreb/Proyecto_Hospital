package com.proyecto.services;

import com.proyecto.Entity.MedicoEntity;
import org.springframework.http.ResponseEntity;

public interface MedicoServices {

    public ResponseEntity<MedicoEntity> guardarMedico(MedicoEntity medico) throws Exception;

    public ResponseEntity<MedicoEntity> obtenerMedicoId(Long id) throws Exception;

    public ResponseEntity<MedicoEntity> actualizarMedicoId(Long id, MedicoEntity detallesNuevos) throws Exception;

    public ResponseEntity<String> eliminarMedicoId(Long id) throws Exception;

}
