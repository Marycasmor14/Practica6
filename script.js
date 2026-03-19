document.addEventListener("DOMContentLoaded", function () {

    let indice = 0;

    const estaciones = [
        {
            nombre: "primavera",
            icono: "imagen/primavera.png",
            mensaje: "¡Las flores están brotando!"
        },
        {
            nombre: "verano",
            icono: "imagen/vacaciones.png",
            mensaje: "¡Día de sol y playa!"
        },
        {
            nombre: "otono",
            icono: "imagen/otono.png",
            mensaje: "¡Las hojas caen!"
        },
        {
            nombre: "invierno",
            icono: "imagen/cabina.png",
            mensaje: "¡Hace frío!"
        }
    ];

    const boton = document.getElementById("boton-estacion");
    const icono = document.getElementById("icono-estacion");
    const titulo = document.getElementById("titulo-estacion");
    const mensaje = document.getElementById("mensaje");
    const fondo = document.getElementById("fondo-animado");

    if (!boton || !icono || !titulo || !mensaje) {
        console.error("Error: faltan elementos en el HTML");
        return;
    }

    boton.addEventListener("click", function () {

        document.body.classList.remove(estaciones[indice].nombre);

        indice = (indice + 1) % estaciones.length;
        const actual = estaciones[indice];

        document.body.classList.add(actual.nombre);

        icono.src = actual.icono;
        titulo.textContent = actual.nombre.charAt(0).toUpperCase() + actual.nombre.slice(1);
        mensaje.textContent = actual.mensaje;

        // partículas simples
        if (actual.nombre === "primavera") {
            fondo.innerHTML = "🌸 🌸 🌸 🌸 🌸";
        } else if (actual.nombre === "verano") {
            fondo.innerHTML = "☀️ ☀️ ☀️ ☀️ ☀️";
        } else if (actual.nombre === "otono") {
            fondo.innerHTML = "🍂 🍂 🍂 🍂 🍂";
        } else if (actual.nombre === "invierno") {
            fondo.innerHTML = "❄️ ❄️ ❄️ ❄️ ❄️";
        }

    });

});