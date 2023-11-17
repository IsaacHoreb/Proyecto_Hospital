package com.proyecto.services;

import com.proyecto.Entity.CitasEntity;

public interface CitasServices {

    public CitasEntity guardarCitas(CitasEntity citas) throws Exception;

    public CitasEntity obtenerCitaId(Long id) throws Exception;

    public CitasEntity actualizarCitaId(Long id, CitasEntity detallesNuevos) throws Exception;

    public String eliminarCitaId(Long id) throws Exception;

}
