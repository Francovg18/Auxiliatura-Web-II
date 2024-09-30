let nombre = "Juanito";
let paterno = 'Perez';
let materno = `Mamamni`;
let edad = 15;
let año = new Date().getFullYear();
let imagen = "imagen.webp";
let resultado = "Hola, mi nombre es "+nombre+" y mi apellido es "+paterno;
let resultado2 = 'Hola, mi apellido es '+paterno;
let resultado3 = `Hola mi nombre es ${nombre} y mi apellido es ${paterno}`

/* console.log(resultado)
console.log(resultado2)
console.log(resultado3) */

document.querySelector("body").innerHTML=`
    <div>Mi apellido es <span>${paterno}</span>
    </div>
    <div>Mi nombre es <span>${nombre}</span>
    </div>
    <button>Aceptar</button>
    <div class="imagen">
        <img src="img/${imagen}"/>
    </div>
`