export class Carrera {
    _id?: number;
    nombre: string;
    ciudad: string;
    cinicio: string;
    fecha: Date;
    numCorredores: number;
    numOrganizadores: number;

    constructor(nombre: string, ciudad: string, cinicio: string,fecha: Date, numCorredores: number,numOrganizadores: number){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.cinicio = cinicio;
        this.fecha = fecha;
        this.numCorredores = numCorredores;
        this.numOrganizadores=numOrganizadores;
    }
}
