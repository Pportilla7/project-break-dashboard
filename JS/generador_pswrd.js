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

    for (let i=0;i<long;i++)
    {
        const indiceAleatorio = Math.floor(Math.random() * tipo.length);
        const tipoDatoAleatorio = tipo[indiceAleatorio];
        
        const indiceDatoAleatorio=Math.floor(Math.random()*tipoDatoAleatorio.length)
        const datoAleatorio=tipoDatoAleatorio[indiceDatoAleatorio]

        console.log(indiceAleatorio,tipoDatoAleatorio,indiceDatoAleatorio,datoAleatorio)
        password.push(datoAleatorio)
    }
    const password_str=password.join('')
    console.log(password_str,password_str.length)
    const pPassword=document.getElementById("password")
    console.log(pPassword)
    pPassword.textContent=`Contraseña generada: ${password_str}`
}
