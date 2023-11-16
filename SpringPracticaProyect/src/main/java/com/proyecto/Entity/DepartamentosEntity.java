package com.proyecto.Entity;

import com.proyecto.Entity.enums.EName;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @Column(name = "name_department", columnDefinition = "VARCHAR(15)", nullable = false)
    private EName nameDepartment;

    @NotBlank(message = "La descripcion no puede estar vacio...")
    @Column(name = "description", columnDefinition = "VARCHAR(50)", nullable = false)
    private String description;

}
