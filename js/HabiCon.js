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
    const btnEnviar = document.querySelector('.btn-enviar');
    
    
    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if(nombre === '' || apellido === '' || correo === '' || mensaje === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes llenar todos los campos",
              });
        }else{
            Swal.fire({
                title: "¡Gracias!",
                text: "Aprecio que se ponga en contacto; su mensaje fue enviado",
                icon: "success",
            }).then((result) =>{
                if(result.isConfirmed){
                    document.getElementById('nombre').value = '';
                    document.getElementById('apellido').value = '';
                    document.getElementById('correo').value = '';
                    document.getElementById('telefono').value = '';
                    document.getElementById('mensaje').value = '';
                }
            });
        }
    });
});
