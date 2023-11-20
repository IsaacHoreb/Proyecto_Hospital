package com.proyecto.repository;

import com.proyecto.Entity.SalasEntity;
import com.proyecto.Entity.enums.ETipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SalasRepository extends JpaRepository<SalasEntity, Long> {

    //Optional<SalasEntity> findByType(ETipo tipo);

}
