document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href; // Obtiene la URL actual
    
    const linksInicio = document.querySelectorAll('.nav-enlace'); // Selecciona todos los enlaces de navegación
    const linksResto = document.querySelectorAll('.nav-enlace--lightside'); // Selecciona todos los enlaces de navegación
    
    linksInicio.forEach(link => {
        // Compara la URL actual con la URL del enlace
        if (link.href === currentLocation) {
            link.classList.add('nav-enlace--selected'); // Agrega la clase 'nav-enlace--activo' al enlace actual
        } else {
            link.classList.remove('nav-enlace--selected'); // Elimina la clase 'nav-enlace--activo' de los demás enlaces
        }
    });

    linksResto.forEach(link => {
        // Compara la URL actual con la URL del enlace
        if (link.href === currentLocation) {
            link.classList.add('nav-enlace--selectedLight'); // Agrega la clase 'nav-enlace--activo' al enlace actual
        } else {
            link.classList.remove('nav-enlace--selectedLight'); // Elimina la clase 'nav-enlace--activo' de los demás enlaces
        }
    });
}); 

