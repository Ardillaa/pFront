export class Usuario {
    _id?: number;
    nombre: string;
    apellidos: string;
    ciudad: string;
    telefono: number;

    constructor(nombre: string, apellidos: string, ciudad: string, telefono: number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
        this.telefono = telefono;
    }
}