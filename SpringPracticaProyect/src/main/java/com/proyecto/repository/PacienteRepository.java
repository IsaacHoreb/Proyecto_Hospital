package com.proyecto.repository;

import com.proyecto.Entity.PacienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PacienteRepository extends JpaRepository<PacienteEntity, Long> {

    Optional<PacienteEntity> findByNameAndLastName(String name, String lastName);

}
