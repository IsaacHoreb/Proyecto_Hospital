//Tipos de datos general de medicos

import { Data } from "@angular/router";

//configurar el tsconfin.json
export class Medicos {

    id: number;
    name: string;
    lastName: string;
    age: number;
    especialization: string[];
    phone: string;
    email: string;
    address: string[];
    startTime: Data;
    endTime: Data;

    // Asegurar que el array de especialización tiene solo un elemento
    setEspecialization(especialization: string) {
        this.especialization = [especialization];
    }

    // Asegurar que el array de especialización tiene solo un elemento
    setAddress(address: string) {
        this.especialization = [address];
    }

}
