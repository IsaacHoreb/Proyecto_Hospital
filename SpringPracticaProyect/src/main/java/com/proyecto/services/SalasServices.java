package com.proyecto.services;

import com.proyecto.Entity.SalasEntity;

public interface SalasServices {

    public SalasEntity guardarSala(SalasEntity salas) throws Exception;

    public SalasEntity obtenerSalaId(Long id) throws Exception;

    public SalasEntity actualizarSalaId(Long id, SalasEntity detallesNuevos) throws Exception;

    public String eliminarSalaId(Long id) throws Exception;

}
