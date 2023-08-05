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

/* */
document.addEventListener("DOMContentLoaded", function () {
    const modalContainers = document.querySelectorAll(".modal");
    const cardTextElements = document.querySelectorAll(".card-mentores-texto");
  
    cardTextElements.forEach((cardTextElement) => {
      cardTextElement.addEventListener("click", function () {
        const modalId = cardTextElement.getAttribute("data-modal-target");
        const modal = document.getElementById(modalId);
  
        if (modal) {
          modal.style.display = "block";
          setTimeout(() => {
            modal.classList.add("open");
          }, 10); // Slight delay to allow the display to take effect before sliding
        }
      });
    });
  
    modalContainers.forEach((modalContainer) => {
      const closeBtn = modalContainer.querySelector(".close");
      closeBtn.addEventListener("click", function () {
        modalContainer.classList.remove("open");
        setTimeout(() => {
          modalContainer.style.display = "none";
        }, 500); // Transition duration is 0.5s (500ms)
      });
    });
  });

  /*
  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
  
    hamburgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  });
  */