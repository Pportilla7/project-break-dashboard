function agregarLink(titulo, enlace) {
    const link = document.createElement('a');
    link.textContent = titulo;
    link.href = enlace;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', function() {
        link.remove();
        localStorage.removeItem(titulo);
    });

    const divLink = document.createElement('div');
    divLink.appendChild(link);
    divLink.appendChild(btnEliminar);

    document.getElementById('listaLinks').appendChild(divLink);

    localStorage.setItem(titulo, enlace);
}

function cargarLinksGuardados() {
    for (let i = 0; i < localStorage.length; i++) {
        const titulo = localStorage.key(i);
        const enlace = localStorage.getItem(titulo);
        agregarLink(titulo, enlace);
    }
}

document.getElementById('agregarLink').addEventListener('click', function() {
    const titulo = document.getElementById('tituloInput').value;
    const enlace = document.getElementById('enlaceInput').value;
    agregarLink(titulo, enlace);
});

window.addEventListener('load', cargarLinksGuardados);
