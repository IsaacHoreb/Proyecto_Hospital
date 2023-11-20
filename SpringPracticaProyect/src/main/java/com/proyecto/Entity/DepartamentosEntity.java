package com.proyecto.Entity;

import com.proyecto.Entity.enums.EName;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "departamentos")
public class DepartamentosEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "El nombre del departamento no puede estar vacio...")
    @Enumerated(EnumType.STRING)
    @Column(name = "name_department", columnDefinition = "VARCHAR(15)", nullable = false, unique = true)
    private EName nameDepartment;

    @NotBlank(message = "La descripcion no puede estar vacio...")
    @Column(name = "description", columnDefinition = "VARCHAR(100)", nullable = false)
    private String description;

    @OneToMany(targetEntity = MedicoEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "departamentos")
    private Set<MedicoEntity> medico = new HashSet<>();

    @OneToMany(targetEntity = SalasEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "departamento")
    private Set<SalasEntity> salas = new HashSet<>();

}
