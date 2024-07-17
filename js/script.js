'use strict';

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