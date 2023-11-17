package com.proyecto.services.impl;

import com.proyecto.Entity.MedicoEntity;
import com.proyecto.repository.MedicoRepository;
import com.proyecto.services.MedicoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MedicoServicesImpl implements MedicoServices {

    @Autowired
    private MedicoRepository medicoRepository;

    @Override
    public ResponseEntity<MedicoEntity> guardarMedico(MedicoEntity medico) throws Exception {

        //Obtener el nombre y el apellido
        MedicoEntity localName = medicoRepository.findByName(medico.getName())
                .orElse(null);

        MedicoEntity localLastName = medicoRepository.findByLastName(medico.getLastName())
                .orElse(null);

        MedicoEntity medicoNuevo = null; //Guardamos el medico

        //Condicion
        if ((localName == null) || (localLastName == null)) {
            //Si no existe en el repositorio
            medicoNuevo = medicoRepository.save(medico);
            return ResponseEntity.ok(medicoNuevo);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @Override
    public ResponseEntity<MedicoEntity> obtenerMedicoId(Long id) throws Exception {

        //Buscar al medico por id
        MedicoEntity local = medicoRepository.findById(id).orElse(null);

        if (local != null) {
            return ResponseEntity.ok(local);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @Override
    public ResponseEntity<MedicoEntity> actualizarMedicoId(Long id, MedicoEntity detallesNuevos) throws Exception {

        //Buscar al medico por id
        MedicoEntity local = medicoRepository.findById(id).orElse(null);

        MedicoEntity MedicoNew; //Para agregar los valores nuevos

        //Condicion
        if (local != null) {

            //Agregamos los datos nuevos
            local.setName(detallesNuevos.getName());
            local.setLastName(detallesNuevos.getLastName());
            local.setAge(detallesNuevos.getAge());
            local.setEspecialization(detallesNuevos.getEspecialization());
            local.setPhone(detallesNuevos.getPhone());
            local.setEmail(detallesNuevos.getEmail());
            local.setAddress(detallesNuevos.getAddress());
            local.setStartTime(detallesNuevos.getStartTime());
            local.setEndTime(detallesNuevos.getEndTime());

            MedicoNew = medicoRepository.save(local); //Guardamos los nuevo datos

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(MedicoNew);

    }

    @Override
    public ResponseEntity<String> eliminarMedicoId(Long id) throws Exception {

        //Buscar al medico por id
        MedicoEntity local = medicoRepository.findById(id).orElse(null);

        if (local != null) {
            medicoRepository.deleteById(id);
            return ResponseEntity.ok("El medico con el id: " + id + " \nha sido eliminado con éxito...");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Ha sucedido algun error al intentar eliminar\nVefirique sus datos...");
        }

    }

}
