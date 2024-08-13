'use strict';

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});


function iniciarApp(){
    crearGaleria('certifications-michelle', 8, );
    /* agregarEventosDeFiltro(); */
}

//Galeria para portafolio
function crearGaleria(categoria, cantidad, puesto) {
    const galeria = document.querySelector(`.galeria-imagenes`);
    
    for(let i = 1; i <= cantidad; i++){
        const imagen = document.createElement('li');
        imagen.classList.add('project-item');
        imagen.classList.add('active');
        imagen.dataset.filterItem ='';
        imagen.dataset.category = categoria.toLowerCase();
        imagen.innerHTML = `
            <a class="project-box" href="#">
                <figure class="project-img">
                    <div class="project-item-icon-box">
                        <ion-icon name="eye-outline" role="img" class="md hydrated" aria-label="eye outline"></ion-icon>
                    </div>
                    <img loading="lazy" class="img-thumb" src="img/${categoria = "certifications-michelle"}/${i}.png" alt="imagen galeria">
                </figure>
                <h3 class="project-title">${categoria}</h3>
            </a>
        `;
        
        imagen.onclick = function() {
            mostrarImagen(categoria, i);
        };

        /* galeria.appendChild(imagen); */
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