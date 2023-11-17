package com.proyecto.repository;

import com.proyecto.Entity.SalasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalasRepository extends JpaRepository<SalasEntity, Long> {
    
}
