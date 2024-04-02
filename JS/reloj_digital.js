const div=document.getElementById("reloj")

div.innerHTML=`
    <div id="fecha"></div>
    <div id="hora"></div>
`
const div_fecha=document.getElementById("fecha")


const div_hora=document.getElementById("hora")

function actualizarHorayFecha() {
    const fechaActual = new Date();

    fecha_str=fechaActual.toDateString();

    const partes = fecha_str.split(" ");
    
    const diaSemana = partes[0]; 
    const mes = partes[1]; 
    const diaMes = partes[2]; 
    const anio = partes[3]; 

    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    div_fecha.innerHTML=`
        <p>${diaSemana}</p>
        <div>
            <p>${diaMes} ${mes}</p>
            <p id="año">${anio}</p>
        </div>
    `

    div_hora.innerHTML = `
    <p>${hora}:${minutos}:${segundos}</p>
    `;
}

actualizarHorayFecha();

setInterval(actualizarHorayFecha, 1000);

