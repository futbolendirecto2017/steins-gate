// Lista de capítulos
const capitulos = [
    {
        titulo: "Capítulo 1",
        url: "https://drive.google.com/file/d/1KAfdakqUvjtn-DfpxbR_uugKu5m-qEzN/preview"
    },
    {
        titulo: "Capítulo 2",
        url: "https://drive.google.com/file/d/ID_DEL_ARCHIVO_2/preview"
    },
    {
        titulo: "Capítulo 3",
        url: "https://drive.google.com/file/d/ID_DEL_ARCHIVO_3/preview"
    }
];

// Variables globales
let capituloActual = 0;
const reproductor = document.getElementById("reproductor");
const tituloCapitulo = document.getElementById("titulo-capitulo");

// Función para cargar un capítulo
function cargarCapitulo(index) {
    if (index >= 0 && index < capitulos.length) {
        capituloActual = index;
        reproductor.src = capitulos[index].url;
        tituloCapitulo.textContent = capitulos[index].titulo;
    }
}

// Eventos de los botones de navegación
document.getElementById("anterior").addEventListener("click", () => {
    if (capituloActual > 0) {
        cargarCapitulo(capituloActual - 1);
    }
});

document.getElementById("siguiente").addEventListener("click", () => {
    if (capituloActual < capitulos.length - 1) {
        cargarCapitulo(capituloActual + 1);
    }
});

// Cargar el capítulo basado en el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const capituloParam = urlParams.get("capitulo");
if (capituloParam !== null) {
    cargarCapitulo(parseInt(capituloParam));
} else {
    cargarCapitulo(0); // Cargar el primer capítulo por defecto
}