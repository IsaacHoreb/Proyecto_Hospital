package com.proyecto.services;

import com.proyecto.Entity.MedicoEntity;

public interface MedicoServices {

    public MedicoEntity guardarMedico(MedicoEntity medico) throws Exception;

    public MedicoEntity obtenerMedicoId(Long id) throws Exception;

    public MedicoEntity actualizarMedicoId(Long id, MedicoEntity detallesNuevos) throws Exception;

    public String eliminarMedicoId(Long id) throws Exception;

}
