document.addEventListener("DOMContentLoaded", function() {
  initializeSlideshow();
});

function initializeSlideshow() {
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0 || dots.length === 0) {
    console.error("Slides or dots not found.");
    return;
  }

  let slideIndex = 0;

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 6000);
  }

  showSlides();
}
