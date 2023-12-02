if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js') /*usar "./dsd.js" especifica la raíz*/
    .then(registrado => console.log("El service worker se registro",registrado))
    .catch(error=>console.log("No se pudo registrar el servicio worker", error));
} else {
    console.log("no es compatible")
}