const estaciones = [
    { nombre: 'primavera', icono: 'imagen/primavera.png', msj: '¡Las flores están brotando!' },
    { nombre: 'verano',    icono: 'imagen/verano.png',    msj: '¡Día de sol y playa!' },
    { nombre: 'otono',     icono: 'imagen/otono.png',     msj: '¡Las hojas caen!' },
    { nombre: 'invierno',  icono: 'imagen/invierno.png',  msj: '¡Hace frío!' }
];

let indice = 0;

window.onload = function () {

    const boton = document.getElementById('boton-estacion');
    const cuerpo = document.body;
    const icono = document.getElementById('icono-estacion');
    const titulo = document.getElementById('titulo-estacion');
    const mensaje = document.getElementById('mensaje');
    const capaFondo = document.getElementById('fondo-animado');

    capaFondo.innerHTML = '<span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span>';

    boton.addEventListener('click', () => {

        cuerpo.classList.remove(estaciones[indice].nombre);
        icono.classList.add('cambio-icono');

        setTimeout(() => {

            indice = (indice + 1) % estaciones.length;
            const actual = estaciones[indice];

            cuerpo.classList.add(actual.nombre);
            icono.src = actual.icono;
            titulo.innerText = actual.nombre.charAt(0).toUpperCase() + actual.nombre.slice(1);
            mensaje.innerText = actual.msj;

            if (actual.nombre === 'primavera') {
                capaFondo.innerHTML = '🌸 🌸 🌸 🌸 🌸';
            } else if (actual.nombre === 'verano') {
                capaFondo.innerHTML = '☀️ 🏖️ ☀️ 🏖️ ☀️';
            } else if (actual.nombre === 'otono') {
                capaFondo.innerHTML = '🍂 🍁 🍂 🍁 🍂';
            } else if (actual.nombre === 'invierno') {
                capaFondo.innerHTML = '❄️ ☃️ ❄️ ☃️ ❄️';
            }

            icono.classList.remove('cambio-icono');

        }, 200);
    });

};