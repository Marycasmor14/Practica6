//definimos nuestras constantes para cada estacion
const estaciones = [
    { nombre: 'primavera', icono: 'imagen/primavera.png', msj: '¡Las flores están brotando!' },
    { nombre: 'verano',    icono: 'imagen/verano.png',    msj: '¡Día de sol y playa!' },
    { nombre: 'otono',     icono: 'imagen/otono.png',     msj: '¡Las hojas caen y todo se vuelve naranja!' },
    { nombre: 'invierno',  icono: 'imagen/invierno.png',  msj: '¡Hace frío y todo está cubierto de nieve!' }
];

let indice = 0;

/* Referencias del HTML */
const boton = document.getElementById('boton-estacion');
const cuerpo = document.body;
const icono = document.getElementById('icono-estacion');
const titulo = document.getElementById('titulo-estacion');
const mensaje = document.getElementById('mensaje');
const capaFondo = document.getElementById('fondo-animado');

// Inicializar partículas
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

        // partículas
        if (actual.nombre === 'primavera') {
            capaFondo.innerHTML = '<span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span>';
        } else if (actual.nombre === 'verano') {
            capaFondo.innerHTML = '<span>☀️</span><span>🏖️</span><span>☀️</span><span>🏖️</span><span>☀️</span>';
        } else if (actual.nombre === 'otono') {
            capaFondo.innerHTML = '<span>🍂</span><span>🍁</span><span>🍂</span><span>🍁</span><span>🍂</span>';
        } else if (actual.nombre === 'invierno') {
            capaFondo.innerHTML = '<span>❄️</span><span>☃️</span><span>❄️</span><span>☃️</span><span>❄️</span>';
        }

        icono.classList.remove('cambio-icono');

    }, 200);
});