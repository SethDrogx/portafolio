<?php
// Recoge los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Crea el mensaje a enviar
$to = "ivanponce_rg@Outlook.com";
$subject = "Nuevo mensaje del formulario de contacto";
$message = "Nombre: $nombre\nApellido: $apellido\nCorreo: $correo\nTeléfono: $telefono\nMensaje:\n$mensaje";
$headers = "From: $correo";

// Envía el correo
mail($to, $subject, $message, $headers);

// Redirige de vuelta a la página del formulario
header('Location: HabiCon.html');
?>
