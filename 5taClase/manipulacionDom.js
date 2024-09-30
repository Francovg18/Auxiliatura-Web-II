let nombre = "Titulo principal";
let animales=0;

const LISTA=[{
    especie:"Pato",
    imagen:"imagen.webp"
},{
    especie:"Ganzo",
    imagen:"imagen3.webp"
}];

document.querySelector("body").innerHTML=`
    <h1>${nombre}</h1>
    <section class="contenedor">
        <div>
            ${LISTA[animales].especie.toUpperCase()}
        </div>
        <img src="img/${LISTA[animales].imagen}"/>
    </section>
`
