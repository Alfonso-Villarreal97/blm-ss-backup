let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let intervalId;

let active = 0;

function loadShow(){
    if (window.innerWidth > 768) {
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    } else {
        items.forEach(item => {
            item.style.transform = 'none';
            item.style.filter = 'none';
            item.style.opacity = 1;
        });
    }
}

function nextSlide() {
    if (window.innerWidth > 768) {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
    }
}

function prevSlide() {
    if (window.innerWidth > 768) {
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
    }
}

function startAutoSlide() {
    if (window.innerWidth > 768) {
        intervalId = setInterval(nextSlide, 1000); // Avanza automáticamente cada 1.5 segundos
    }
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

next.onclick = nextSlide;
prev.onclick = prevSlide;

next.addEventListener('mouseenter', stopAutoSlide);
prev.addEventListener('mouseenter', stopAutoSlide);

// Detener la animación cuando el mouse entra en el slider
document.querySelector('.slider').addEventListener('mouseenter', () => {
    stopAutoSlide();
});

// Reiniciar la animación cuando el mouse sale del slider
document.querySelector('.slider').addEventListener('mouseleave', () => {
    startAutoSlide();
});

window.addEventListener('resize', () => {
    stopAutoSlide();
    if (window.innerWidth > 1200) {
        startAutoSlide();
    }
    loadShow();
});

loadShow();
startAutoSlide(); // Iniciar automáticamente el deslizamiento al cargar la página
