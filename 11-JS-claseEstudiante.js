class Estudiante {
    #nombre;
    #asignaturas = ["javaScript", "HTML", "CSS"];
    constructor(nombre){
        this.#nombre = nombre;
        this.#asignaturas;
    }

    getNombre(){
        return this.#nombre
    }
    getAsignaturas(){
        return this.#asignaturas;
    }

    obtenDatos(){
        nombre=estudiante.getNombre
        asignaturas = estudiante.getAsignaturas
        return estudiante;
    }   
    
}

/*function obtenDatos(estudiante){
    nombre=estudiante.getNombre();
    asignaturas=estudiante.getAsignaturas();
    return estudiante;
}*/

const estudiante= new Estudiante("Jhon");
console.log(estudiante.obtenDatos())






