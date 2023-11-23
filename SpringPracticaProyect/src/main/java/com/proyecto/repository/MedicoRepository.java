package com.proyecto.repository;

import com.proyecto.Entity.MedicoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MedicoRepository extends JpaRepository<MedicoEntity, Long> {

    Optional<MedicoEntity> findByName(String name);

    Optional<MedicoEntity> findByLastName(String lastName);

    Optional<MedicoEntity> findByNameAndLastName(String name, String lastName); //Buscar ambos

}
