package com.proyecto.services;

import com.proyecto.Entity.DepartamentosEntity;

public interface DepartamentoServices {

    public DepartamentosEntity guardarDepartamento(DepartamentosEntity departamentos) throws Exception;

    public DepartamentosEntity obtenerDepartamentoId(Long id) throws Exception;

    public DepartamentosEntity actualizarDepartamentoID(Long id, DepartamentosEntity detallesNuevo) throws Exception;

    public String eliminarDepartamentoId(Long id) throws Exception;

}
