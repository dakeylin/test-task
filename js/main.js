const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const navBtn = document.getElementById("openModal");
const btnClose = document.getElementsByClassName("btn_close");

btn.onclick = function () {
  modal.style.display = "block";
};

navBtn.onclick = function () {
  modal.style.display = "block";
};

btnClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const burgerBtn = document.getElementById("burger");

burgerBtn.onclick = function () {
  document.querySelector(".header").classList.toggle("open");
};




//Карусель

let slideIndex = 1;

showSlides(slideIndex);

const nextBtn = document.querySelector('.next')

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carusel_item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
