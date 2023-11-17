package com.proyecto.services;

import com.proyecto.Entity.HistorialEntity;

public interface HistorialServices {

    public HistorialEntity guardarHistorial(HistorialEntity historial) throws Exception;

    public HistorialEntity obtenerHistorialId(Long id) throws Exception;

    public HistorialEntity actualizarHistorialId(Long id, HistorialEntity detallesNuevos) throws Exception;




}
