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
        
        // Recogemos los datos del formulario
        const formData = new FormData (formulario);
        
        // Envíamos los datos a enviar_formulario.php usando AJAX
        fetch('enviar_formulario.php',{
            method: 'POST',
            body:formData
        })
        .then(response=>{
            if(response.ok){
                return response.text();
            }
            throw new Error('Error en la respuesta del servidor.');
        })
        .then(data =>{
            Swal.fire({
                title: "¡Gracias!",
                text: "Aprecio que se ponga en contacto; su mensaje fue enviado",
                icon: "success"
            });
        })
        .catch(error =>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Parece que algo salió mal"
            });
            console.error('Error',error);
        })
    });
});
