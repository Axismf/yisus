// script.js: JS funcionalidad básica para el clon de Dimerc Perú

// Slider de banners (hero)
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let sliderInterval;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

function nextSlide() {
  let nextIdx = (currentSlide + 1) % slides.length;
  showSlide(nextIdx);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 4000);
}

function stopSlider() {
  if (sliderInterval) clearInterval(sliderInterval);
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    stopSlider();
    showSlide(idx);
    startSlider();
  });
});

if (slides.length > 1) {
  showSlide(0);
  startSlider();
}

// Smooth scroll para navegación del menú
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
