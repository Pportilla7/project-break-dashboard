const apiKey="20f4a9d00fe443d7a9390954240604"
let city="madrid"
const days=5
let urlCurrent=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
let urlNextDays=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no`
const divTiempoActual=document.getElementById("tiempo_actual")
const boton=document.getElementById("buscar_ciudad")

weatherCurrent(urlCurrent)
weatherNextDays(urlNextDays)

boton.addEventListener("click",()=>{
    const ciudadInput = document.getElementById("ciudad");
    city = ciudadInput.value;
    urlCurrent=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    urlNextDays=`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no`

    weatherCurrent(urlCurrent)
    weatherNextDays(urlNextDays)
})

async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener datos del servidor");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}

function weatherCurrent(url){
    const weatherCurrentPromise = new Promise((resolve, reject) => {
        getWeather(urlCurrent)
            .then(data => {
                resolve(data); // Resolvemos la promesa con los datos obtenidos
            })
            .catch(error => {
                reject(error); // Rechazamos la promesa con el error obtenido
            });
    });
    
    weatherCurrentPromise.then(resultado=>{
        imprimirResultadosWeatherCurrent(resultado)
    })
    .catch(error=>{
        console.error("Error",error)
    })
}

function weatherNextDays(url){
    const divTiempoNextDays=document.getElementById("tiempo_nextdays")
    divTiempoNextDays.innerHTML=''
    const weatherNextDaysPromise = new Promise((resolve, reject) => {
        getWeather(urlNextDays)
            .then(data => {
                resolve(data); // Resolvemos la promesa con los datos obtenidos
            })
            .catch(error => {
                reject(error); // Rechazamos la promesa con el error obtenido
            });
    });
    
    weatherNextDaysPromise.then(resultado=>{
        console.log(resultado)
        imprimirResultadosNextDays(resultado)
    })
    .catch(error=>{
        console.error("Error",error)
    })
}



function imprimirResultadosWeatherCurrent(res){
    encabezado=document.getElementById("encabezado")
    encabezado.firstChild.textContent=`${res.location.name}/${res.location.country}. Hora local: ${res.location.localtime}`
    
    cuerpo=document.getElementById("cuerpo")
    console.log(cuerpo.firstChild)
    cuerpo.firstChild.textContent=`${res.current.temp_c}ºC`
    const img=document.getElementById("img_tiempo")
    img.src=res.current.condition.icon
    cuerpo.lastChild.textContent=`
    Humedad: ${res.current.humidity}
    Precipitacion: ${res.current.precip_mm}
    Viento: ${res.current.wind_kph}
    `
    final=document.getElementById("final")
    console.log(final.firstChild)
    final.firstChild.textContent=`Ultima actualización: ${res.current.last_updated}`



}

function imprimirResultadosNextDays(res){
    console.log(res.forecast.forecastday[0].date)
    const divTiempoNextDays=document.getElementById("tiempo_nextdays")
    for (let i of res.forecast.forecastday){
        console.log(i)
        console.log(i.date)
        divNextDay=document.createElement("div")
        divNextDay.innerHTML=`
        <p>${i.date}</p>
        <img src="${i.day.condition.icon}" alt="">
        <p>Min: ${i.day.mintemp_c}ºC  /  Max: ${i.day.maxtemp_c}ºC</p>
        `
        divTiempoNextDays.appendChild(divNextDay)
    }
}