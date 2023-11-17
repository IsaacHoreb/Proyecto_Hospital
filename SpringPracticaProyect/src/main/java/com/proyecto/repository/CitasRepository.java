package com.proyecto.repository;

import com.proyecto.Entity.CitasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitasRepository extends JpaRepository<CitasEntity, Long> {

}
