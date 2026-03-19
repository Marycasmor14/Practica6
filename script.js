document.addEventListener("DOMContentLoaded", function () {

    const estaciones = [
        { nombre: 'primavera', icono: 'imagen/primavera.png', msj: '¡Las flores están brotando!' },
        { nombre: 'verano',    icono: 'imagen/vacaciones.png',    msj: '¡Día de sol y playa!' },
        { nombre: 'otono',     icono: 'imagen/otono.png',     msj: '¡Las hojas caen!' },
        { nombre: 'invierno',  icono: 'imagen/temporada.png',  msj: '¡Hace frío!' }
    ];

    let indice = 0;

    const boton = document.getElementById('boton-estacion');
    const cuerpo = document.body;
    const icono = document.getElementById('icono-estacion');
    const titulo = document.getElementById('titulo-estacion');
    const mensaje = document.getElementById('mensaje');
    const capaFondo = document.getElementById('fondo-animado');

    if (!boton) {
        console.error("No se encontró el botón");
        return;
    }

    boton.addEventListener('click', function () {

        cuerpo.classList.remove(estaciones[indice].nombre);

        indice = (indice + 1) % estaciones.length;
        const actual = estaciones[indice];

        cuerpo.classList.add(actual.nombre);
        icono.src = actual.icono;
        titulo.innerText = actual.nombre.charAt(0).toUpperCase() + actual.nombre.slice(1);
        mensaje.innerText = actual.msj;

        // partículas
        if (actual.nombre === 'primavera') {
            capaFondo.innerHTML = '🌸 🌸 🌸 🌸 🌸';
        } else if (actual.nombre === 'verano') {
            capaFondo.innerHTML = '☀️ ☀️ ☀️ ☀️ ☀️';
        } else if (actual.nombre === 'otono') {
            capaFondo.innerHTML = '🍂 🍂 🍂 🍂 🍂';
        } else if (actual.nombre === 'invierno') {
            capaFondo.innerHTML = '❄️ ❄️ ❄️ ❄️ ❄️';
        }

    });

});