import imprimirImagen from "./imagenes_random.js"
imprimirImagen()


function agregarLink(titulo, link) {
    console.log(titulo,link)
    const links=cargarLinksGuardados()
    const titulos=cargarTitulosGuardados()

    console.log(titulos)
    console.log(links)

    links.push(link)
    titulos.push(titulo)

    console.log(titulos)
    console.log(links)

    localStorage.setItem("titulos",JSON.stringify(titulos));
    localStorage.setItem("links",JSON.stringify(links));
}

function cargarTitulosGuardados() {
    const titulos = JSON.parse(localStorage.getItem('titulos')) || [];
    return titulos
}


function cargarLinksGuardados() {
    const enlaces = JSON.parse(localStorage.getItem('links')) || [];
    return enlaces
}

function imprimirLink(titulo, link) {
    const enlace = document.createElement('a');
    enlace.innerHTML=`<a href=${link} target="_blank">${titulo}</a>`

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';

    const divLink = document.createElement('div');
    console.log(divLink)
    divLink.appendChild(enlace);
    divLink.appendChild(btnEliminar);

    document.getElementById('listaLinks').appendChild(divLink);
}

export { agregarLink, cargarTitulosGuardados, cargarLinksGuardados, imprimirLink }

document.getElementById('listaLinks').addEventListener('click', function(event) {
    console.log("detecto el evento")
    if (event.target.tagName === 'BUTTON') {
        console.log("has pulsado el boton de eliminar")
        const enlaceDiv = event.target.parentElement;
        
        enlaceDiv.remove();

        const titulo = enlaceDiv.querySelector('a').textContent;
        console.log(titulo)

        let titulos = cargarTitulosGuardados()
        let links = cargarLinksGuardados()

        const index = titulos.indexOf(titulo);

        if (index !== -1) {
            titulos.splice(index, 1);
            links.splice(index, 1);
            console.log(titulos, links);

            localStorage.setItem('titulos', JSON.stringify(titulos));
            localStorage.setItem('links', JSON.stringify(links));
        }
    }
});


document.getElementById('agregarLink').addEventListener('click', function() {
    const titulo = document.getElementById('tituloInput').value;
    const link = document.getElementById('enlaceInput').value;

    if (titulo.trim() === '' || link.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return; // Detener la ejecución si hay campos vacíos
    }

    agregarLink(titulo, link);
    imprimirLink(titulo,link)
});

window.addEventListener('load', ()=>{
    //localStorage.clear();

    const links=cargarLinksGuardados()
    const titulos=cargarTitulosGuardados()
    
    for (let i = 0; i < titulos.length; i++) {
        imprimirLink(titulos[i], links[i]);
    }
    console.log("se carga la pagina y se imprimen todos los links almacenados")
});


