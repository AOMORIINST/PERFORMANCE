/* =====================================================
   AOMORI PERFORMANCE
   JAVASCRIPT
===================================================== */


/* =====================================================
   CONFIGURACIÓN
===================================================== */

// IMPORTANTE:
// Cambiar este número por el WhatsApp de Aomori.
// Formato internacional SIN +, espacios ni guiones.
//
// Ejemplo Argentina:
// 5491123456789

const WHATSAPP_NUMBER = "549XXXXXXXXXX";

const INSTAGRAM_URL = "https://www.instagram.com/TU_INSTAGRAM";


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Cerrar menú al seleccionar una sección */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   WHATSAPP
===================================================== */

function openWhatsApp(model) {

    const message =
        `Hola Aomori Performance! 👋%0A%0A` +
        `Estoy interesado/a en el ${model}.%0A%0A` +
        `¿Podrían pasarme disponibilidad, precio y formas de compra?`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank");

}


/* =====================================================
   BOTONES DE PRODUCTOS
===================================================== */

const whatsappButtons =
    document.querySelectorAll(".whatsapp-button");

whatsappButtons.forEach(button => {

    button.addEventListener("click", () => {

        const model = button.dataset.model;

        openWhatsApp(model);

    });

});


/* =====================================================
   WHATSAPP FLOTANTE
===================================================== */

const floatingWhatsapp =
    document.getElementById("floatingWhatsapp");

floatingWhatsapp.addEventListener("click", (event) => {

    event.preventDefault();

    openWhatsApp("un short de Muay Thai");

});


/* =====================================================
   INSTAGRAM
===================================================== */

document.querySelectorAll(
    'a[href*="TU_INSTAGRAM"]'
).forEach(link => {

    link.href = INSTAGRAM_URL;

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".product-card, .gallery-item, .latest-content, .intro-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});