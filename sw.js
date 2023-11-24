const nombreCache = "PWAIVANPONCE"
const archivosCache = [
    "/",
    "/index.html",
    "/HabiCon.html",
    "/css/bootstrap.css",
    "/css/style.css",
    "/css/estilo.css",
    "/js/app.js",
    "/js/HabiCon.js",
    "/js/index.js"
]

self.addEventListener('install', e => {
    console.log("El service worker se instalo", e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada correctatamente")
            cache.addAll(archivosCache);
        })
        )
    }) 
    
    self.addEventListener('activate', e => {
        console.log("el service worker activo",e)
    })
    self.addEventListener('fetch', e=>{  //el fetch valida si los datos de la cache son los mismos, si no, los vuelve a mandar reemplezando los datos modificados cuando se tiene internet. 
        console.log("fetch.. ", e)
        e.respondWith(
            caches.match(e.request)
            .then(respuestaCache=>{
                return respuestaCache
            })
        )
    })