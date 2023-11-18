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


document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario
    const formulario = document.querySelector('.formulario-contacto');

    // Agrega un listener para el evento 'submit' del formulario
    formulario.addEventListener('submit', function(event) {
        // Evita que se envíe el formulario por defecto
        event.preventDefault();

        // Aquí puedes realizar la lógica para enviar el formulario

        // Muestra una alerta de SweetAlert
        Swal.fire({
            title: "¡Gracias!",
            text: "Aprecio que se ponga en contacto; su mensaje fue enviado",
            icon: "success"
          });
    });
});
