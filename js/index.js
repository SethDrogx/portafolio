//Funcion para que la imagen "aparezca"
function mostrarImagen(rutaImagen) {
    var contenedorEmergente = document.createElement('div');
    contenedorEmergente.className = 'contenedor-emergente';
    var imagen = new Image();
    imagen.src = rutaImagen;
    imagen.className = 'img-fluid imagen-emergente';

    contenedorEmergente.appendChild(imagen);

    document.body.appendChild(contenedorEmergente);

    setTimeout(function () {
        contenedorEmergente.classList.add('mostrar');
    }, 10);

    contenedorEmergente.onclick = function () {
        contenedorEmergente.classList.remove('mostrar');
        setTimeout(function () {
            contenedorEmergente.remove();
        }, 300);
    };
}

// Funcion para detectar cuando el usuario se desplaza
window.addEventListener('scroll', function() {
    const section = document.getElementById('mis-proyectos');
    const elementosADesvanecer = section.querySelectorAll('.desvanecer');

    elementosADesvanecer.forEach(elemento => {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('aparecer');
        }
    });
});

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

