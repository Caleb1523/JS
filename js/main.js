// Función que muestra un mensaje al hacer clic en el botón
function mostrarMensaje() {
    // Redirige a otra página (puedes cambiar el nombre del archivo)
    window.location.href = "./html/ejercicios.html";
}

// Asociar la función al botón
document.getElementById("botonBienvenida").addEventListener("click", mostrarMensaje);

