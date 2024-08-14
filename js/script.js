'use strict';

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});


function iniciarApp(){
    crearGaleria('certifications-sasha', 11);
    crearGaleria2('certifications-michelle', 10);
    /* agregarEventosDeFiltro(); */
}

function crearGaleria(categoria, cantidad) {
    const galeria = document.querySelector(`.galeria-imagenes`);
    
    for(let i = 1; i <= cantidad; i++){
        const imagen = document.createElement('li');
        imagen.classList.add('clients-item');
        imagen.classList.add('has-scrollbar');
        imagen.dataset.filterItem ='';
        imagen.dataset.category = categoria.toLowerCase();
        imagen.innerHTML = `
            <a href="#">
                <img loading="lazy" class="logo-carousel" src="img/${categoria}/${i}.png" alt="imagen galeria">
            </a>
        `;

        galeria.appendChild(imagen);
    }

    // Redefinir filterItems después de crear las imágenes
    /* agregarEventosDeFiltro(); */
}

function crearGaleria2(categoria, cantidad) {
    const galeria2 = document.querySelector(`.galeria-imagenes2`);
    
    for(let i = 1; i <= cantidad; i++){
        const imagen = document.createElement('li');
        imagen.classList.add('clients-item');
        imagen.classList.add('has-scrollbar');
        imagen.dataset.filterItem ='';
        imagen.dataset.category = categoria.toLowerCase();
        imagen.innerHTML = `
            <a href="#">
                <img loading="lazy" class="logo-carousel" src="img/${categoria}/${i}.png" alt="imagen galeria">
            </a>
        `;

        galeria2.appendChild(imagen);
    }

    // Redefinir filterItems después de crear las imágenes
    /* agregarEventosDeFiltro(); */
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}

const BoxInfo = document.querySelector("[sidebar-box]");
const BtnInfoMore = document.querySelector("[data-sidebar-btn]");

BtnInfoMore.addEventListener("click", function () { 
    elementToggleFunc(BoxInfo); 
});

//Funcion para active
const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
}