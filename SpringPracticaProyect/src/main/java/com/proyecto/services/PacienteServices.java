package com.proyecto.services;

import com.proyecto.Entity.PacienteEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PacienteServices {

    public ResponseEntity<PacienteEntity> guardarPaciente(PacienteEntity paciente) throws Exception;

    public ResponseEntity<PacienteEntity> obtenerPacienteId(Long id) throws Exception;

    public ResponseEntity<PacienteEntity> actualizarPacienteId(Long id, PacienteEntity detallesNuevos) throws Exception;

    public ResponseEntity<String>eliminarPacienteId(Long id) throws Exception;

    public List<PacienteEntity> listarPacientes() throws Exception;

}
