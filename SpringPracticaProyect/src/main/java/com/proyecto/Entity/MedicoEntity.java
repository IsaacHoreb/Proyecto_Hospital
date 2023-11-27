package com.proyecto.Entity;

import com.proyecto.Entity.enums.EEspecialidad;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "medicos")
public class MedicoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre no puede estar vacio...")
    @Column(name = "name", columnDefinition = "VARCHAR(25)", nullable = false)
    private String name;

    @NotBlank(message = "El apellido no puede estar vacio...")
    @Column(name = "last_name", columnDefinition = "VARCHAR(25)", nullable = false)
    private String lastName;

    @NotNull(message = "La edad no puede estar vacio...")
    @Column(name = "age", columnDefinition = "INT(11)", nullable = false)
    private Integer age;

    @NotNull(message = "La especialidad no puede estar vacio...")
    @Enumerated(EnumType.STRING)
    @Column(name = "especialization", columnDefinition = "VARCHAR(25)", nullable = false)
    private EEspecialidad especialization;

    @NotBlank(message = "El telefono no puede estar vacio...")
    @Column(name = "phone", columnDefinition = "VARCHAR(15)", nullable = false, unique = true)
    private String phone;

    @NotBlank(message = "El correo no puede estar vacio...")
    @Email
    @Column(name = "email", columnDefinition = "VARCHAR(50)", nullable = false, unique = true)
    private String email;

    @NotBlank(message = "La direccion no puede estar vacio...")
    @Column(name = "address", columnDefinition = "VARCHAR(50)", nullable = false)
    private String address;

    @NotNull(message = "El horario de inicio no puede estar vacio...")
    @Column(name = "start_time", columnDefinition = "TIME", nullable = false)
    private LocalTime startTime;

    @NotNull(message = "El horario de terminacion no puede estar vacio...")
    @Column(name = "end_time", columnDefinition = "TIME", nullable = false)
    private LocalTime endTime;

    @OneToMany(targetEntity = CitasEntity.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "medico")
    private Set<CitasEntity> citas = new HashSet<>();

    @OneToOne(targetEntity = DepartamentosEntity.class)
    private DepartamentosEntity departamentos;

}
