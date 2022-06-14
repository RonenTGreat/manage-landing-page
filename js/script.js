const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n){
  showSlides(slideIndex += n);
}

// Thumbnial image controls
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length){slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

