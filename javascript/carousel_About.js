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
        }, 3000); // Intervalo de 3 segundos
    };

    const stopAutoSlide = () => {
        clearInterval(intervalId);
    };

    const iconUp = document.querySelector('.icon-up');
    const iconDown = document.querySelector('.icon-down');

    iconUp.addEventListener('click', () => {
        navigate('up');
        stopAutoSlide();
        startAutoSlide(); // Reanudar el avance automático después de hacer clic manualmente
    });

    iconDown.addEventListener('click', () => {
        navigate('down');
        stopAutoSlide();
        startAutoSlide(); // Reanudar el avance automático después de hacer clic manualmente
    });

    // Iniciar el avance automático al cargar la página
    startAutoSlide();

    // Detener el avance automático al pasar el ratón sobre el slider
    document.querySelector('.slider').addEventListener('mouseenter', () => {
        stopAutoSlide();
    });

    // Reanudar el avance automático al quitar el ratón del slider
    document.querySelector('.slider').addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Mostrar el primer ítem al cargar la página
    showItem(0);
});
