let slideIndex = 1;
showSlides(slideIndex);

//Next & Previous Controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thimbnail Image Controls
function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = getdocument.getElementsByClassName("characterSlides");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
