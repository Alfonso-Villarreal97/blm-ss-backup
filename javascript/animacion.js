var swiper = new Swiper(".mySwiper", {
    /* effect: "coverflow", */
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",  // Corrección del nombre de la propiedad
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        /* depth: 300, */
        modifier: 1,
        slideShadows: true,
    },
    loop: true,

    autoplay: {
        delay: 500, // Cambiar de diapositiva cada 3 segundos
        disableOnInteraction: false, // No detener la reproducción automática al interactuar con el swiper
    },

    speed: 800, // Duración de la transición en milisegundos (0.8 segundos)

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Detener la reproducción automática cuando el mouse entra en el swiper
swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

// Reanudar la reproducción automática cuando el mouse sale del swiper
swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});

/* --------------------------------------------------------------------- */




