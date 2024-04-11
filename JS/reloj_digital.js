import imprimirImagen from "./imagenes_random.js"

imprimirImagen()

const div=document.getElementById("reloj")

const divFecha=document.getElementById("fecha")

const divHora=document.getElementById("hora")

const divFrase=document.getElementById("frase")

function actualizarHorayFecha() {
    const fechaActual = new Date();

    const fechaStr=fechaActual.toDateString();

    const partes = fechaStr.split(" ");
    
    const diaSemana = partes[0]; 
    const mes = partes[1]; 
    const diaMes = partes[2]; 
    const anio = partes[3]; 

    let hora = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    console.log(segundos.length)
    if(segundos.length<2)
    {
        let aux=segundos
        segundos="0"+aux
    }
    if(minutos.length<2)
    {
        let aux=minutos
        minutos="0"+aux
    }
    if(hora.length<2)
    {
        let aux=hora
        hora="0"+aux
    }

    divFecha.innerHTML=`
        <p>${diaSemana}</p>
        <div>
            <p>${diaMes} ${mes}</p>
            <p id="año">${anio}</p>
        </div>
    `

    divHora.innerHTML = `
    <p>${hora}:${minutos}:${segundos}</p>
    `;

    if(((parseInt(hora)>=18) && (parseInt(minutos)>=1)) && (parseInt(hora)<22))
    {
        console.log("")
    }

    let frase

    if ((hora === 0 && minutos >= 1) && (hora < 7)) {
        console.log("Es hora de descansar. Apaga y sigue mañana");
        frase="Es hora de descansar. Apaga y sigue mañana"
    } else if (hora < 12) 
        {
            console.log("Buenos días, desayuna fuerte y a darle al código");
            frase="Buenos días, desayuna fuerte y a darle al código"
        } else if (hora < 14) 
            {
                console.log("Echa un rato más pero no olvides comer");
                frase="Echa un rato más pero no olvides comer"
            } else if (hora < 16) 
                {
                    console.log("Espero que hayas comido");
                    frase="Espero que hayas comido"
                 } else if (hora < 18) 
                    {
                        console.log("Buenas tardes, el último empujón");
                        frase="Buenas tardes, el último empujón"
                    } else if (hora < 22) 
                        {
                            console.log("Esto ya son horas extras, ... piensa en parar pronto");
                            frase="Esto ya son horas extras, ... piensa en parar pronto"
                        } else {
                            console.log("Buenas noches, es hora de pensar en parar y descansar");
                            frase="Es hora de descansar. Apaga y sigue mañana"
                        }
    divFrase.innerHTML=`
        <p>${frase}</p>
    `
}

actualizarHorayFecha();

setInterval(actualizarHorayFecha, 1000);

