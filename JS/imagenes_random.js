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