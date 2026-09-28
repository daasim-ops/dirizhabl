const sliderTape = document.querySelector(".slider-tape");

let currentSlide = 0;
const totalSlides = 3;

function nextSlide() {
  sliderTape.style.transition = "transform 0.5s ease-in-out";
  sliderTape.style.transform = "translateX(-33.333%)";

  sliderTape.addEventListener("transitionend", function handler() {
    sliderTape.style.transition = "none";
    sliderTape.appendChild(sliderTape.firstElementChild);
    sliderTape.style.transform = "translateX(0)";
    sliderTape.removeEventListener("transitionend", handler);
  });
}

setInterval(nextSlide, 4000);

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function prevSlide() {
  sliderTape.style.transition = "none";
  sliderTape.prepend(sliderTape.lastElementChild);
  sliderTape.style.transform = "translateX(-33.333%)";

  setTimeout(() => {
    sliderTape.style.transition = "transform 0.5s ease-in-out";
    sliderTape.style.transform = "translateX(0)";
  }, 20);
}
if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

const signupButtons = document.querySelectorAll(".card-signup");
const signupSection = document.getElementById("signup");
const heroButton = document.getElementById("openModalBtn");

signupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    signupSection.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      heroButton.classList.add("signup-attention");
      setTimeout(() => {
        heroButton.classList.remove("signup-attention");
      }, 800);
    }, 700);
  });
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
