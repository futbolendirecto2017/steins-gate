// Lista de capítulos con URLs de Google Drive
const capitulos = [
    { titulo: "Capítulo 1", url: "https://drive.google.com/file/d/1KAfdakqUvjtn-DfpxbR_uugKu5m-qEzN/preview" },
    { titulo: "Capítulo 2", url: "https://drive.google.com/file/d/1Vj13ubo9dn1C8IC7NyPcy-6W2fQbilyy/preview" },
    { titulo: "Capítulo 3", url: "https://drive.google.com/file/d/1Z3V7f_Eg6oU-Pq6ZK_zrr8sVGAI-RExh/preview" },
    { titulo: "Capítulo 4", url: "https://drive.google.com/file/d/1jX2KNdg29j9a-dMMK18puGIX_8-fAsi9/preview" },
    { titulo: "Capítulo 5", url: "https://drive.google.com/file/d/1yO3AUtM_lABnearyCw6tcSuhKc-urh_s/preview" },
    { titulo: "Capítulo 6", url: "https://drive.google.com/file/d/1iXmPe7bIVFkTMou7eHt4mb_2srOWRpfd/preview" },
    { titulo: "Capítulo 7", url: "https://drive.google.com/file/d/1tOCZXfZAAGZrDWluzc4vhCq6QMSc8shJ/preview" },
    { titulo: "Capítulo 8", url: "https://drive.google.com/file/d/1Q8Ep3Y5ub-daU-Yx7BqeiphXVjfdDSEM/preview" },
    { titulo: "Capítulo 9", url: "https://drive.google.com/file/d/11q4bperQP-SaVuw-SuKhcuWfkpHjn1I_/preview" },
    { titulo: "Capítulo 10", url: "https://drive.google.com/file/d/1jTHnUieL6Lp_FsQmJO4pO-C0_RFgCqd8/preview" },
    { titulo: "Capítulo 11", url: "https://drive.google.com/file/d/1jhkMTPGvjoZ0ugZGDNK7p0XbW5QHPfck/preview" },
    { titulo: "Capítulo 12", url: "https://drive.google.com/file/d/1jfCxjvzHs5ZhlbaUPggE1lIIUcnekilb/preview" },
    { titulo: "Capítulo 13", url: "https://drive.google.com/file/d/1F9j_aMFLDpYLiUGJF28Gae8WSvcV6hUu/preview" },
    { titulo: "Capítulo 14", url: "https://drive.google.com/file/d/1aOQSLKO8OZcqLZaZ6dX0fPHnlgDb_fFT/preview" },
    { titulo: "Capítulo 15", url: "https://drive.google.com/file/d/1QT6SJRYZaG-c_dGHo2afKbFwQBzVr6vc/preview" },
    { titulo: "Capítulo 16", url: "https://drive.google.com/file/d/1VxSyD-IK0Re8l4jfujZwpR98fXxNjGet/preview" },
    { titulo: "Capítulo 17", url: "https://drive.google.com/file/d/1ZjYEd3tk79IqVe19GN6F-3w_q0QpYApO/preview" },
    { titulo: "Capítulo 18", url: "https://drive.google.com/file/d/1nIz1Xn7Y1J1zxXxMY3Ch8kLAP2ZAI1i3/preview" },
    { titulo: "Capítulo 19", url: "https://drive.google.com/file/d/1dOpcTAS7LncypV4RVZyl6vk--l8xWwVt/preview" },
    { titulo: "Capítulo 20", url: "https://drive.google.com/file/d/1XPIswzKBHZ2kXsJBomcluBMafu1L0H6M/preview" },
    { titulo: "Capítulo 21", url: "https://drive.google.com/file/d/1cgRBc407SNx0JywlCQRx32RvScCs03ge/preview" },
    { titulo: "Capítulo 22", url: "https://drive.google.com/file/d/1lfel38l8774vm0o-dTAFS5ewZI_8d6h6/preview" },
    { titulo: "Capítulo 23", url: "https://drive.google.com/file/d/1Bfrxrp--ae85PP42c3h287ULFhI91Lsf/preview" },
    { titulo: "FIN TEMPORADA 1", url: "https://drive.google.com/file/d/1avnlmrcauC4_5M9ZdW-V2FbON0Rbsz6T/preview" },
    { titulo: "INICIO TEMPORADA 2", url: "https://drive.google.com/file/d/1KjqEIA091w1OKkeo3lAPWb0d9Jx5_hx6/preview" },
    { titulo: "OVA", url: "https://drive.google.com/file/d/1SfvdO-_3eSc5DtuPP40paeDrelRCl5Qg/preview" }

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
