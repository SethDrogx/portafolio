const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_2mpq7tb';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        Swal.fire({
          title: "¡Gracias!",
          text: "Aprecio que se ponga en contacto",
          icon: "success"
        }).then((result) =>{
          if(result.isConfirmed){
            limpiarForm();
          }
        });
      })
      .catch((err) => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Parece que algo salio mal, intenta más tarde',
          footer: `<pre>${JSON.stringify(err)}</pre>`
        });
      });
  }
});

function validateForm() {
  const name = document.getElementById('from_name').value.trim();
  const lastName = document.getElementById('last_name').value.trim();
  const email = document.getElementById('email_id').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || lastName === '' || email === '' || message === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debes llenar todos los campos',
      footer: 'Todos los campos son requeridos (excepto el telefono)'
    });
    return false;
  }
  return true;
}

function limpiarForm() {
  document.getElementById('from_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('email_id').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}
