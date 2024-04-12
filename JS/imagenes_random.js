import {actualizarHorayFecha, getFrase,imprimirPantalla} from "./reloj_digital.js";
// import { agregarLink, cargarTitulosGuardados, cargarLinksGuardados, imprimirLink } from "./listado_links.js"

imprimirImagen()

function imprimirImagen(){
    const cantidaFotos=13
    let numImagen=Math.floor(Math.random()*cantidaFotos)
    let imagen=numImagen.toString()+'.jpg'
   
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage = `url(/IMG/${imagen})`;
}
setInterval(imprimirImagen,15000)

export default imprimirImagen

const divReloj = document.getElementById("reloj");
console.log(divReloj)

divReloj.addEventListener("click", function() {
    // console.log("He pulsado el div")
    // actualizarHorayFecha()
    window.location.href = "/HTML/reloj_digital.html";

});

// const divListado = document.getElementById("listado");
// console.log(divListado)

// divListado.addEventListener("click", function() {
//     window.location.href = "/HTML/listado_links.html";

// });

// const divContraseña = document.getElementById("password");

// console.log(divContraseña)

// divContraseña.addEventListener("click", function() {
    
//     window.location.href = "/HTML/generador_pswrd.html";

// });

// const divEstacion = document.getElementById("estacion");

// divEstacion.addEventListener("click", function() {
//     console.log("He pulsado el div")
//     window.location.href = "/HTML/estacion_meteorologica.html";

// });