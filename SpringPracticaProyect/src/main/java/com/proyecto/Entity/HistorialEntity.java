package com.proyecto.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@Table(name = "historial")
public class HistorialEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "La fecha de creacion no puede estar vacio...")
    @Column(name = "date_created", columnDefinition = "DATE", nullable = false)
    private LocalDate dateCreated;

    @NotBlank(message = "El diagnostico no puede estar vacio...")
    @Column(name = "diagnoses", columnDefinition = "VARCHAR(100)", nullable = false)
    private String diagnoses;

    @NotBlank(message = "El tratamiento no puede estar vacio...")
    @Column(name = "treatments", columnDefinition = "VARCHAR(100)", nullable = false)
    private String treatments;

    @NotBlank(message = "Las notas medicas no pueden estar vacio...")
    @Column(name = "medical_notes", columnDefinition = "VARCHAR(100)")
    private String medicalNotes;

    @OneToOne(targetEntity = PacienteEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private PacienteEntity paciente;

    @ManyToOne(targetEntity = MedicoEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicoEntity medico;


}
