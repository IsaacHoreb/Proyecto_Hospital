package com.proyecto.repository;

import com.proyecto.Entity.DepartamentosEntity;
import com.proyecto.Entity.enums.EName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartamentoRepository extends JpaRepository<DepartamentosEntity, Long> {

    Optional<DepartamentosEntity> findByNameDepartment(EName name);

}
