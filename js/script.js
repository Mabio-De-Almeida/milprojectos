const slider = document.querySelector('.card-slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let cardIndex = 0;
let slideInterval;

function showCard(index) {
    slider.style.transform = `translateX(-${index * 450}px)`;
}

function nextSlide() {
    cardIndex = (cardIndex + 1) % cards.length;
    showCard(cardIndex);
}

function prevSlide() {
    cardIndex = (cardIndex - 1 + cards.length) % cards.length;
    showCard(cardIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);

startAutoSlide();
showCard(cardIndex);
