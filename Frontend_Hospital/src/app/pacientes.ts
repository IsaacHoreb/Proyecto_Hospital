export class Pacientes {

    id: number;
    name: string;
    lastName: string;
    dateBirth: string;
    genero: string[];
    address: string;
    phone: string;
    medicalHistory: string;

    // Asegurar que el array de genero tiene solo un elemento
    setGenero(genero: string) {
        this.genero = [genero];
    }

}
