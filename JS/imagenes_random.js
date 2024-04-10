const cantidaFotos=13

imprimirImagen()

function elegirFotoAleatoria(){
    let numImagen=Math.floor(Math.random()*cantidaFotos)
    let imagen=numImagen.toString()+'.jpg'
    return imagen
}

function imprimirImagen(){
    const imgBorrar=document.querySelector("img")
    imgBorrar.remove()
    const body=document.querySelector("body")
   
    let img=document.createElement('img')
    let imagen=elegirFotoAleatoria()
    img.src=`/IMG/${imagen}`
    body.appendChild(img)
}

setInterval(imprimirImagen,3000)