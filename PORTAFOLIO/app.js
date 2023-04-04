
// ESCONDE NAVBAR 

let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};




// -----------------------

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {

    
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");


    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        });
    };
});



// NAV PEGADIZA

let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);


// QUE SE SALGA EL NAV CUANDO TOCO BOTON

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");



};

// API DE SCROLL REVEAL

ScrollReveal({ 
    reset: true,
    distance: "100px",
    duration: 2500,
    delay: 200

 });

 ScrollReveal().reveal('.home-content, .heading', {origin: "top"});
 ScrollReveal().reveal(' .services-container, .portfolio-box, .contact-form', {origin: "bottom"});
 ScrollReveal().reveal('.home-content h1,.web, .about-img', {origin: "left"});
 ScrollReveal().reveal('.home-content p,.home-img, .about-content', {origin: "right"});


// API DE TYPED


 const typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer", "Tech Salesman"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })







