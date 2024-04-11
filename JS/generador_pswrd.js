import imprimirImagen from "./imagenes_random.js"

imprimirImagen()

const boton=document.getElementById("boton")

const mayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minus="abcdefghijklmnopqrstuvwxyz"
const numeros="0123456789"
const simbolos="!@#$%^&*()-_=+"

boton.addEventListener('click',()=>{
    const long_psw=document.getElementById("longitud")
    let longitud=long_psw.value;
    generadorPassword(longitud);
})

function generadorPassword(long){
    const tipo=[mayus,minus,numeros,simbolos]
    //Falta que haya una tipo de dato minimo por cada uno
    let password=[]
    let comprobacion=false

    for (let i=0;i<long;i++)
    {
        const indiceAleatorio = Math.floor(Math.random() * tipo.length);
        const tipoDatoAleatorio = tipo[indiceAleatorio];
        
        const indiceDatoAleatorio=Math.floor(Math.random()*tipoDatoAleatorio.length)
        const datoAleatorio=tipoDatoAleatorio[indiceDatoAleatorio]

        password.push(datoAleatorio)
    }
    comprobacion=comprobarCantidadObligatoria(password)
    if(!comprobacion)
    {
        console.log("la contraseña esta mal")
        generadorPassword(long)
    }
    const password_str=password.join('')
    console.log(password)
    const pPassword=document.getElementById("password")
   
    pPassword.textContent=`Contraseña generada: ${password_str}`
}

function comprobarCantidadObligatoria(password){
    const mayus = /[A-Z]/,
        minus = /[a-z]/,
        numeros = /[0-9]/,
        simbolos = /[!@#$%^&*()-_=+]/;

    let tieneMayus = false,
        tieneMinus = false,
        tieneNumeros = false,
        tieneSimbolos = false;

    password.forEach(element => {
        if (mayus.test(element)) {
            tieneMayus = true;
        } else if (minus.test(element)) {
            tieneMinus = true;
        } else if (numeros.test(element)) {
            tieneNumeros = true;
        } else if (simbolos.test(element)) {
            tieneSimbolos = true;
        }
    });

    if(tieneMayus && tieneMinus && tieneNumeros && tieneSimbolos)
        return true
}

