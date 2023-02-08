export class Organizador {
    _id?: number;
    nombre: string;
    apellidos: string;
    dni: string;
    telefono: string;
    ciudad: string;
    edad: Number;
    vehiculo: String;


    constructor(nombre: string, ciudad: string, apellidos: string,dni: string, edad: number,telefono: string,vehiculo:string){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.apellidos = apellidos;
        this.dni = dni;
        this.edad = edad;
        this.telefono = telefono;
        this.vehiculo=vehiculo;
    }
}

