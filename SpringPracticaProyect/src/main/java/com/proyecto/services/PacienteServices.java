package com.proyecto.services;

import com.proyecto.Entity.PacienteEntity;

public interface PacienteServices {

    public PacienteEntity guardarPaciente(PacienteEntity paciente) throws Exception;

    public PacienteEntity obtenerPacienteId(Long id) throws Exception;

    public PacienteEntity actualizarPacienteId(Long id, PacienteEntity detallesNuevos) throws Exception;

    public String eliminarPacienteId(Long id) throws Exception;

}
