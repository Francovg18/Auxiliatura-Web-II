//Objeto
const Estudiante = {
    id: 1,
    nombre: 'Juan',
    estatura: 170,
    //Métodos
    saludar() {
        return 'Hola, soy ' + this.nombre;
    }
};
alert(Estudiante.saludar())
alert(Estudiante.nombre)

//Clases
class Producto {
    constructor() {
        this.id = 2;
        this.nombre = "manzana";
        this.precio = 2;
    }
    /* constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    } */
    

}
//Instanciar
const pera = new Producto()
console.log(pera)


//Herencia
class Persona{
    constructor(nombre, edad){
        this.nombre = "Luis";
        this.edad = 15;
    }

}
class Profesional extends Persona{
    constructor(){
        super();
        this.titulo = "Ingeniero";
    }
}

const persona = new Persona();
const profesional = new Profesional();

alert(`${profesional.nombre} es ${profesional.titulo}`);