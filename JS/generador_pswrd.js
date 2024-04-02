const boton=document.getElementById("boton")

const mayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minus="abcdefghijklmnopqrstuvwxyz"
const numeros="0123456789"
const simbolos="!@#$%^&*()-_=+"

boton.addEventListener('click',()=>{
    const long_psw=document.getElementById("longitud")
    let longitud=long_psw.value;
    console.log(longitud)
    generadorPassword(longitud);
})

function generadorPassword(long){
    //obligamos a tener por lo menos 2 de cada tipo
    let cant_mayus=2
    let cant_minus=2
    let cant_num=2
    let cant_simb=2
    let cant_restante=long-8

    const tipo=[mayus,minus,numeros,simbolos]

    const indiceAleatorio = Math.floor(Math.random() * tipo.length);
    const valorAleatorio = tipo[indiceAleatorio];
    
    if(valorAleatorio==0){
        console.log("mayusculas")
    }else{
        if(valorAleatorio==1){
            console.log("minusculas")
        }
        else{
            if(valorAleatorio==2)
            {
                console.log("numeros")
            }
            else{
                console.log("simbolos")
            }
        }
    }
}
