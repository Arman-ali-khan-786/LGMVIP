var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var bigimg = document.getElementById('bigimg')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var img5 = document.getElementById('img5')
var img6 = document.getElementById('img6')
var img7 = document.getElementById('img7')
img1.addEventListener('click' , function(){
  bigimg.src = img1.src
})
img2.addEventListener('click' , function(){
  bigimg.src = img2.src
})
img3.addEventListener('click' , function(){
  bigimg.src = img3.src
})
img4.addEventListener('click' , function(){
  bigimg.src = img4.src
})
img5.addEventListener('click' , function(){
  bigimg.src = img5.src
})
img6.addEventListener('click' , function(){
  bigimg.src = img6.src
})
img7.addEventListener('click' , function(){
  bigimg.src = img7.src
})
var mgbtn = document.getElementById('mag-btn')
mgbtn.addEventListener('click',function(){
  alert('ThankYou for subcribing your weekly online Magazine')
})