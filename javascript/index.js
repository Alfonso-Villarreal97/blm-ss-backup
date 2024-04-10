
var OpcionInicio = document.querySelector(".OpcionInicio");/*Selecciono mi class OpcionInicio y lo envio a una variable*/
var OpcionQuienessomos = document.querySelector(".OpcionQuienessomos");
var OpcionServicios = document.querySelector(".OpcionServicios");
var OpcionContactanos = document.querySelector(".OpcionContactanos");
var OpcionBlog = document.querySelector(".OpcionBlog");
/**/
var opcionreportelaboral = document.querySelectorAll(".reporte-lab-icono");
var opcionconsultas = document.querySelectorAll(".consultas-icono");
var opcionbuscarempleo = document.querySelector(".buscar_empleo_boton");
var opcionbolsatrabajoicono = document.querySelectorAll(".bolsatrabajoicono");
var opcionseguimiento=document.querySelectorAll(".boton_seguimiento");



var fondovideoprincipal = document.querySelector(".videoprincipal");/*1 */
var fondoservicios = document.querySelector(".fondoservicios");/* 2*/
var fondoquienessomos = document.querySelector(".fondoquienessomos");/*3 */
var fondoreportelab = document.querySelector(".fondoreportelab");/*4 */
var fondobolsadetrabajo = document.querySelector(".fondobolsadetrabajo");/*5 */
var fondoconsulta = document.querySelector(".fondoconsulta");/*6*/
var fondobuscarempleo = document.querySelector(".fondobuscartrabajo"); /*7*/
var fondocontactanos = document.querySelector(".fondocontactanos"); /* 8 */
var fondoblog=document.querySelector(".fondoblog");/* 9 */
var fondoseguimiento=document.querySelector(".fondoseguimiento") /* 10 */



var contenidoprincipal = document.querySelector(".principal"); /*1*/
var contenidoquienessomos = document.querySelector(".contenedor2");/*2*/
var contenidoservicios = document.querySelector(".contenido-servicios");/*3*/
var contenidoreportelaboral = document.querySelector(".contenido-reporte-laboral");/*4*/
var contenidobolsadetrabajo = document.querySelector(".contenido-bolsadetrabajo");/*5*/
var contenidoconsultas = document.querySelector(".contenido-consultas");/*6*/
var contenidobuscartrabajo = document.querySelector(".contenido_buscar_empleo"); /* 7 */
var contenidocontactanos = document.querySelector(".contenido_contactanos"); /* 8 */
var contenido_blog=document.querySelector(".contenido_blog");/* 9 */
var contenidoseguimiento=document.querySelector(".contenido_seguimiento") /* 10 */

var colorletrasmenu = document.querySelectorAll(".opc");





/*Esta funcion sirve para cambiar los fondos de pantalla de la pagina*/
function fondo(...elementos) {

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
    elementos[elementos.length - 1].style.display = "block";
}

function contenido(...elementoss) {
    for (let i = 0; i < elementoss.length; i++) {
        elementoss[i].style.display = "none";
    }
    elementoss[elementoss.length - 1].style.display = "block";
}

/*Esta funcion sirve para los diseños de los botones*/
function menudiseno(elemento1, elemento2, elemento3, elemento4, elemento5) {
    elemento1.style.backgroundColor = "";
    elemento2.style.backgroundColor = "";
    elemento3.style.backgroundColor = "";
    elemento4.style.backgroundColor = "";
    elemento5.style.backgroundColor = "#D0E0DB";
}

OpcionInicio.addEventListener("click", function () {
    menudiseno(OpcionQuienessomos, OpcionServicios, OpcionContactanos, OpcionBlog, OpcionInicio);
    fondo(fondoservicios, fondoseguimiento,fondocontactanos, fondoquienessomos, fondoconsulta, fondoreportelab, fondobolsadetrabajo, fondobuscarempleo, fondoblog,fondovideoprincipal);
    contenido(contenidoconsultas, contenidoseguimiento,contenidocontactanos, contenidobuscartrabajo, contenidoquienessomos, contenidobolsadetrabajo, contenidoservicios, contenidoreportelaboral, contenido_blog,contenidoprincipal);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "white";
    }
});

OpcionQuienessomos.addEventListener("click", function () {
    menudiseno(OpcionInicio, OpcionServicios, OpcionContactanos, OpcionBlog, OpcionQuienessomos);
    fondo(fondoservicios, fondoseguimiento,fondocontactanos, fondoconsulta, fondobuscarempleo, fondoreportelab, fondovideoprincipal, fondobolsadetrabajo,fondoblog, fondoquienessomos);
    contenido(contenidoconsultas, contenidoseguimiento,contenidocontactanos, contenidobuscartrabajo, contenidobolsadetrabajo, contenidoservicios, contenidoprincipal, contenidoreportelaboral, contenido_blog,contenidoquienessomos);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black";
    }

});

OpcionServicios.addEventListener("click", function () {
    menudiseno(OpcionInicio, OpcionContactanos, OpcionBlog, OpcionQuienessomos, OpcionServicios);
    fondo(fondovideoprincipal, fondoseguimiento,fondocontactanos, fondobuscarempleo, fondoconsulta, fondoreportelab, fondobolsadetrabajo, fondoquienessomos, fondoblog,fondoservicios);
    contenido(contenidoprincipal, contenidoseguimiento,contenidocontactanos, contenidobuscartrabajo, contenidobolsadetrabajo, contenidoquienessomos, contenidoconsultas, contenidoreportelaboral, contenido_blog,contenidoservicios);
    contenidoservicios.style.display = "flex";
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black";
    }
});

OpcionBlog.addEventListener("click", function () {
    menudiseno(OpcionInicio, OpcionServicios, OpcionContactanos, OpcionQuienessomos, OpcionBlog);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black";
    }
});

OpcionContactanos.addEventListener("click", function () {
    menudiseno(OpcionQuienessomos, OpcionServicios, OpcionBlog, OpcionInicio, OpcionContactanos);
    contenido(contenidoprincipal, contenidoseguimiento,contenidoreportelaboral, contenidoquienessomos, contenidoservicios, contenidobolsadetrabajo, contenidoconsultas, contenidobuscartrabajo, contenido_blog,contenidocontactanos);
    fondo(fondoservicios, fondoseguimiento,fondoquienessomos, fondoservicios, fondovideoprincipal, fondobolsadetrabajo, fondoconsulta, fondobuscarempleo, fondoblog,fondocontactanos);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black ";
    }
});
OpcionBlog.addEventListener("click", function () {
    menudiseno(OpcionQuienessomos, OpcionServicios, OpcionInicio, OpcionContactanos,OpcionBlog);
    contenido(contenidoprincipal, contenidoseguimiento,contenidoreportelaboral, contenidoquienessomos, contenidoservicios, contenidobolsadetrabajo, contenidoconsultas, contenidobuscartrabajo,contenidocontactanos, contenido_blog);
    fondo(fondoservicios, fondoseguimiento,fondoquienessomos, fondoservicios, fondovideoprincipal, fondobolsadetrabajo, fondoconsulta, fondobuscarempleo,fondocontactanos, fondoblog);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black ";
    }
});





opcionreportelaboral[0].addEventListener("click", function () {
    fondo(fondoservicios, fondoseguimiento,fondoquienessomos, fondocontactanos, fondoconsulta, fondobuscarempleo, fondovideoprincipal, fondobolsadetrabajo, fondoblog,fondoreportelab);
    contenido(contenidoprincipal,contenidoseguimiento ,contenidocontactanos, contenidobuscartrabajo, contenidoquienessomos, contenidoservicios, contenidobolsadetrabajo, contenidoconsultas, contenido_blog,contenidoreportelaboral);
})

opcionreportelaboral[1].addEventListener("click", function () {
    fondo(fondoservicios, fondoseguimiento,fondoquienessomos, fondocontactanos, fondoconsulta, fondobuscarempleo, fondovideoprincipal, fondobolsadetrabajo, fondoblog,fondoreportelab);
    contenido(contenidoprincipal, contenidoseguimiento,contenidocontactanos, contenidobuscartrabajo, contenidoquienessomos, contenidoservicios, contenidobolsadetrabajo, contenidoconsultas, contenido_blog,contenidoreportelaboral);
})

opcionconsultas[0].addEventListener("click", function () {
    contenido(contenidoprincipal, contenidoseguimiento,contenidobuscartrabajo, contenidoquienessomos, contenidoservicios, contenidoreportelaboral, contenidobolsadetrabajo, contenido_blog,contenidoconsultas);
    fondo(fondoservicios, fondoseguimiento, fondocontactanos, fondoquienessomos, fondobuscarempleo, fondovideoprincipal, fondoreportelab, fondobolsadetrabajo, fondoblog,fondoconsulta);

})

opcionconsultas[1].addEventListener("click", function () {
    contenido(contenidoprincipal, contenidoseguimiento,contenidocontactanos, contenidobuscartrabajo, contenidoquienessomos, contenidoservicios, contenidoreportelaboral, contenidobolsadetrabajo, contenido_blog,contenidoconsultas);
    fondo(fondoservicios, fondoseguimiento,fondocontactanos, fondoquienessomos, fondobuscarempleo, fondovideoprincipal, fondoreportelab, fondobolsadetrabajo, fondoblog,fondoconsulta);

})

opcionbuscarempleo.addEventListener("click", function () {
    menudiseno(OpcionQuienessomos, OpcionServicios, OpcionContactanos, OpcionBlog, OpcionInicio);
    contenido(contenidoprincipal, contenidoseguimiento,contenidocontactanos, contenidoreportelaboral, contenidoquienessomos, contenidoservicios, contenidobolsadetrabajo, contenidoconsultas, contenido_blog,contenidobuscartrabajo);
    fondo(fondoservicios, fondoseguimiento,fondoquienessomos, fondoservicios, fondovideoprincipal, fondobolsadetrabajo, fondoconsulta, fondocontactanos, fondoblog,fondobuscarempleo);
    for (var i = 0; i < colorletrasmenu.length; i++) {
        colorletrasmenu[i].style.color = "black ";
    }
})

opcionbolsatrabajoicono[0].addEventListener("click",function(){
    contenido(contenidoservicios,contenidoseguimiento,contenidoreportelaboral,contenidoquienessomos,contenidoprincipal,contenidocontactanos,contenidoconsultas,contenidobuscartrabajo,contenido_blog,contenidobolsadetrabajo);
    fondo(fondovideoprincipal,fondoseguimiento,fondoservicios,fondoreportelab,fondoquienessomos,fondocontactanos,fondoconsulta,fondobuscarempleo,fondoblog,fondobolsadetrabajo);
})

opcionbolsatrabajoicono[1].addEventListener("click",function(){
    contenido(contenidoservicios,contenidoseguimiento,contenidoreportelaboral,contenidoquienessomos,contenidoprincipal,contenidocontactanos,contenidoconsultas,contenidobuscartrabajo,contenido_blog,contenidobolsadetrabajo);
    fondo(fondovideoprincipal,fondoseguimiento,fondoservicios,fondoreportelab,fondoquienessomos,fondocontactanos,fondoconsulta,fondobuscarempleo,fondoblog,fondobolsadetrabajo);
})

/* ''''' */
opcionseguimiento[0].addEventListener("click",function(){
    contenido(contenidoservicios,contenidoreportelaboral,contenidoquienessomos,contenidoprincipal,contenidocontactanos,contenidoconsultas,contenidobuscartrabajo,contenido_blog,contenidobolsadetrabajo,contenidoseguimiento);
    fondo(fondovideoprincipal,fondoservicios,fondoreportelab,fondoquienessomos,fondocontactanos,fondoconsulta,fondobuscarempleo,fondoblog,fondobolsadetrabajo,fondoseguimiento);
})

opcionseguimiento[1].addEventListener("click",function(){
    contenido(contenidoservicios,contenidoreportelaboral,contenidoquienessomos,contenidoprincipal,contenidocontactanos,contenidoconsultas,contenidobuscartrabajo,contenido_blog,contenidobolsadetrabajo,contenidoseguimiento,contenidoseguimiento);
    fondo(fondovideoprincipal,fondoservicios,fondoreportelab,fondoquienessomos,fondocontactanos,fondoconsulta,fondobuscarempleo,fondoblog,fondobolsadetrabajo,fondoseguimiento);
})