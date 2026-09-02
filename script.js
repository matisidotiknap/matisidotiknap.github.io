function openPage(pageName, elmnt, color) {
    // Ocultar todos los elementos de la clase "tabcontent" por defecto
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Elimina el color de fondo de todos los enlaces de pestañas/botones
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Mostrar el contenido específico de la pestaña
    document.getElementById(pageName).style.display = "block";

    // Añade el color específico al botón 
    // que se usa para abrir el contenido de la pestaña
    elmnt.style.backgroundColor = color;
}

// Consigue el elemento con id="defaultOpen" y haz click en él
document.getElementById("defaultOpen").click();