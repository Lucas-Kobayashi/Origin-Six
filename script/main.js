// Toggle menu on and off

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// Hide menu when click on link
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// Change header when scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Testimonials swipers
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true
});

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about.text,
  #services .header, #services .card,
  #testimonials .headers, #testimonials .testimonials,
  #contact .text, #contact.links
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Back to top
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
