package com.proyecto.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.proyecto.Entity.enums.EGenero;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "pacientes")
public class PacienteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre no puede estar vacio...")
    @Column(name = "name", columnDefinition = "VARCHAR(25)", nullable = false)
    private String name;

    @NotBlank(message = "El apellido no puede estar vacio...")
    @Column(name = "last_name", columnDefinition = "VARCHAR(26)", nullable = false)
    private String lastName;

    @NotBlank(message = "La fecha de nacimiento no puede estar vacio...")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date_birth", columnDefinition = "DATE", nullable = false)
    private LocalDate dateBirth;

    @NotNull(message = "El genero no puede estar vacio...")
    @Enumerated(EnumType.STRING)
    @Column(name = "genero", columnDefinition = "VARCHAR(15)", nullable = false)
    private EGenero genero;

    @NotBlank(message = "La direccion no puede estar vacio...")
    @Column(name = "address", columnDefinition = "VARCHAR(50)", nullable = false)
    private String address;

    @NotBlank(message = "El telefono no puede estar vacio...")
    @Column(name = "phone", columnDefinition = "VARCHAR(20)", nullable = false, unique = true)
    private String phone;

    @NotBlank(message = "El historial medico no puede estar vacio...")
    @Column(name = "medical_historial", columnDefinition = "VARCHAR(100)", nullable = false)
    private String MedicalHistory;

}
