let slideIndex = 0;
const slides = document.querySelectorAll('.content');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function setCurrentSlide(index) {
    showSlide(index);
}

// Auto slide every 20 seconds
setInterval(nextSlide, 20000);

// Initial display
showSlide(slideIndex);