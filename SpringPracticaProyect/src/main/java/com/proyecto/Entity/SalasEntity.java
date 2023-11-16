package com.proyecto.Entity;

import com.proyecto.Entity.enums.ETipo;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "salas")
public class SalasEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "El tipo de sala no puede estar vacio...")
    @Column(name = "type", columnDefinition = "VARCHAR(15)", nullable = false)
    private ETipo type;

    @OneToMany(targetEntity = CitasEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "sala")
    private Set<CitasEntity> citas = new HashSet<>();

    @OneToOne(targetEntity = DepartamentosEntity.class)
    private DepartamentosEntity departamento;


}
