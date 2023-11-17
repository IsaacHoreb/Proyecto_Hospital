package com.proyecto.repository;

import com.proyecto.Entity.DepartamentosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartamentoRepository extends JpaRepository<DepartamentosEntity, Long> {

}
