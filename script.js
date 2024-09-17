const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//!<<-----Carousel showing 3 image 

let currentIndex = 0;

function showSlide(index) {
    const cards = document.querySelectorAll('.carousel-card');
    const track = document.querySelector('.carousel-track');
    const totalSlides = cards.length;

    if (index >= totalSlides - 2) {
        currentIndex = 0;
    } else 
    
    if (index < 0) {
        currentIndex = totalSlides - 3;
    } 
    
    else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 / 3;
    track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
