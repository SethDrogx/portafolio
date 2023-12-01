// Obtener todas las barras de progreso
const barras = document.querySelectorAll('.progresso');

// Función para mostrar las barras de progreso
function mostrarBarras() {
    barras.forEach(barra => {
        const valor = barra.getAttribute('data-valor');
        barra.style.height = `${valor}%`; // Establecer la altura según el porcentaje
        barra.style.opacity = 1; // Mostrar la barra
    });
}

// Mostrar las barras al cargar la página
window.onload = mostrarBarras;


