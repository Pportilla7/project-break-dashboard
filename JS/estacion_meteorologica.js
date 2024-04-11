
const apiKey="20f4a9d00fe443d7a9390954240604"
let city="madrid"
const days=5
let urlCurrent=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
let urlNextDays=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no`
const divTiempoActual=document.getElementById("tiempo_actual")
const boton=document.getElementById("buscar_ciudad")

//weatherCurrent(urlCurrent)
getWeather(urlCurrent,true)
getWeather(urlNextDays,false)

boton.addEventListener("click",()=>{
    const ciudadInput = document.getElementById("ciudad");
    city = ciudadInput.value;

    urlCurrent=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    urlNextDays=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no`

    console.log(urlNextDays)
    getWeather(urlCurrent,true)
    getWeather(urlNextDays,false)
})

async function getWeather(url,current) {
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener datos del servidor");
        }
        const data = await response.json();
        if(current){
            console.log("imprimo los datos actuales")
            imprimirResultadosWeatherCurrent(data)
        }else{
            console.log("imprimo los datos next days")
            console.log(data)
            imprimirResultadosNextDays(data)
        }
        
        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}


function imprimirResultadosWeatherCurrent(res){
    const divTiempoActual=document.getElementById("tiempoActual")
    const encabezado=document.getElementById("encabezado")
    console.log(divTiempoActual,encabezado)
    encabezado.firstChild.textContent=`${res.location.name}/${res.location.country}. Hora local: ${res.location.localtime}`
    
    const cuerpo=document.getElementById("cuerpo")
    
    cuerpo.firstChild.textContent=`${res.current.temp_c}ºC`
    const img=document.getElementById("img_tiempo")
    console.log(img)
    img.src=res.current.condition.icon
    cuerpo.lastChild.textContent=`
        Humedad: ${res.current.humidity}
        Precipitacion: ${res.current.precip_mm}
        Viento: ${res.current.wind_kph}
    `
    final=document.getElementById("final")
    
    final.firstChild.textContent=`Ultima actualización: ${res.current.last_updated}`
}

function imprimirResultadosNextDays(res){
    let j=1
    for (let i of res.forecast.forecastday){
        
        let div=document.getElementById(`dia${j}`)
        console.log(div)
        imprimirHTML(i,div)
        j+=1
    }

}

function imprimirHTML(i,div){
    console.log(i,div)
    const p1=div.firstChild
    p1.textContent=`${i.date}`
    const img = div.querySelector('img');
    console.log(img)

    img.src = `${i.day.condition.icon}`;
    
    const p2=div.lastChild
    p2.textContent=`Min: ${i.day.mintemp_c}ºC  /  Max: ${i.day.maxtemp_c}ºC`
}



import imprimirImagen from "./imagenes_random.js"

imprimirImagen()
