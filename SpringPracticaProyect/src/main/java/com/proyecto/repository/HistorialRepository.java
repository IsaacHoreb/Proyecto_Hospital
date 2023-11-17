package com.proyecto.repository;

import com.proyecto.Entity.HistorialEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistorialRepository extends JpaRepository<HistorialEntity, Long> {

}
