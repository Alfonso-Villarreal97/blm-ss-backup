document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.slider .item');
    let currentItemIndex = 0;
    let intervalId;

    const showItem = (index) => {
        items.forEach(item => {
            item.classList.remove('active', 'blur');
            item.style.zIndex = "";
        });

        items[index].classList.add('active');
        items[index].style.zIndex = "1";

        if (index === 0) {
            items[items.length - 1].classList.add('blur');
        } else {
            items[index - 1].classList.add('blur');
        }
    };

    const navigate = (direction) => {
        if (direction === 'up') {
            currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
        } else if (direction === 'down') {
            currentItemIndex = (currentItemIndex + 1) % items.length;
        }
        showItem(currentItemIndex);
    };

    const startAutoSlide = () => {
        intervalId = setInterval(() => {
            navigate('down');
        }, 14000); // Intervalo de 3 segundos
    };

    const stopAutoSlide = () => {
        clearInterval(intervalId);
    };

    const iconUp = document.querySelector('.icon-up');
    const iconDown = document.querySelector('.icon-down');
    const slider = document.querySelector('.slider');

    const handleResize = () => {
        if (window.innerWidth <= 100) {
            stopAutoSlide(); // Detiene la animación en pantallas menores a 100px
            slider.style.transition = 'none'; // Desactiva la transición
        } else {
            startAutoSlide(); // Reanuda la animación en pantallas mayores a 100px
            slider.style.transition = ''; // Restaura la transición
        }
    };

    iconUp.addEventListener('click', () => {
        navigate('up');
        stopAutoSlide(); // Detener el avance automático al hacer clic manualmente        
    });

    iconDown.addEventListener('click', () => {
        navigate('down');
        stopAutoSlide(); // Detener el avance automático al hacer clic manualmente        
    });

    window.addEventListener('resize', handleResize); // Ajusta el comportamiento en función del tamaño de la ventana

    // Iniciar el avance automático al cargar la página
    startAutoSlide();

    // Detener el avance automático al pasar el ratón sobre el slider
    slider.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });

    // Reanudar el avance automático al quitar el ratón del slider
    slider.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Mostrar el primer ítem al cargar la página
    showItem(0);

    // Llama a handleResize para asegurar que el slider está en el estado correcto al cargar la página
    handleResize();
});
