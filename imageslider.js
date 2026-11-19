let cindex = 0
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[cindex].classList.remove('active');
    cindex = (cindex + direction + slides.length) % slides.length;


slides[cindex].classList.add('active');
}