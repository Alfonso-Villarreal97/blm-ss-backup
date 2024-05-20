// Contenido de barrabusqueda.js

const blogs = [
    {
        title: "¿Qué hago si una empresa no me contrata por tener una demanda laboral?",
        url: "../pages/empresanocontrata.html",
        date: "10 octubre, 2023 1m",
        img: "../img/nocontrata.png",
        excerpt: "Dentro de nuestros lineamientos legales y política de calidad, establecemos a las empresas contratantes de nuestro servicio..."
    },
    {
        title: "¿Cómo puedo ejercer mis derechos ARCO?",
        url: "../pages/derechosarco.html",
        date: "10 octubre, 2023 1m",
        img: "../img/arco.png",
        excerpt: "ARCO (Acceso, Rectificación, Cancelación y Oposición de datos personales) es el derecho que tienes para poder autorizar o negar el uso de tu información personal a terceros..."
    },
    {
        title: "¿Cómo puedo saber si una Empresa me boletinó?",
        url: "../pages/empresaboletino.html",
        date: "10 octubre, 2023 1m",
        img: "../img/boletino.png",
        excerpt: "No es posible 'boletinar' a un trabajador, el único boletín que existe es el que emiten las Juntas de Conciliación y Arbitraje Local y Federal de cada Estado..."
    },
    {
        title: "¿Porqué tienen mis datos personales sin mi autorización?",
        url: "../pages/datospersonales.html",
        date: "10 octubre, 2023 1m",
        img: "../img/autorizacion.png",
        excerpt: "Antes que nada debemos de recordar que en post anteriores, hemos informado que Buró Laboral México 'no vende ni solicita tus datos personales'..."
    },
    {
        title: "Llevo meses en búsqueda de empleo y nadie me contrata",
        url: "../pages/nocontratan.html",
        date: "6 octubre, 2023 1m",
        img: "../img/Pensando.jpg",
        excerpt: "Una de las preguntas más comunes dentro de nuestra plataforma es saber si una empresa no contrata a algún candidato por salir mal en su análisis laboral y la respuesta es la siguiente..."
    }
];

document.getElementById('searchBar').addEventListener('input', searchBlogs);
document.getElementById('searchButton').addEventListener('click', searchBlogs);

function searchBlogs() {
    let query = document.getElementById('searchBar').value.toLowerCase();
    let results = blogs.filter(blog => blog.title.toLowerCase().includes(query));

    displayResults(results);
}

function displayResults(results) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(result => {
        let resultItem = document.createElement('article');
        resultItem.classList.add('post');

        resultItem.innerHTML = `
            <div class="post-header">
                <div>
                    <img src="${result.img}" class="post-img"> 
                </div>
            </div>
            <div class="post-body">
                <span>${result.date}</span>
                <h2>${result.title}</h2>
                <p>${result.excerpt}</p>
                <a href="${result.url}" class="post-link">Leer más...</a>
            </div>
        `;

        resultsDiv.appendChild(resultItem);
    });
}
