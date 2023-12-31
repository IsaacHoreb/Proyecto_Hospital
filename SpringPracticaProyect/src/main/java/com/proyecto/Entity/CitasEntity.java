package com.proyecto.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.proyecto.Entity.enums.EEstado;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "citas")
public class CitasEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "La fecha no puede estar vacio...")
    @Column(name = "date", columnDefinition = "DATE", nullable = false)
    private LocalDate date;

    @NotNull(message = "La hora no puede estar vacio...")
    @Column(name = "hour", columnDefinition = "TIME", nullable = false)
    private LocalTime hour;

    @NotBlank(message = "El motivo no puede estar vacio...")
    @Column(name = "motive", columnDefinition = "VARCHAR(50)", nullable = false)
    private String motive;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "El estado no puede estar vacio...")
    @Column(name = "stated", columnDefinition = "VARCHAR(10)", nullable = false)
    private EEstado stated;

    @OneToOne(targetEntity = PacienteEntity.class)
    private PacienteEntity paciente;

    @ManyToOne(targetEntity = MedicoEntity.class,fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicoEntity medico;

    @ManyToOne(targetEntity = SalasEntity.class, fetch = FetchType.LAZY)
    private SalasEntity sala;

}
