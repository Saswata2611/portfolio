let abt = document.getElementById("about");
let exp = document.getElementById("experience-content");
let proj = document.getElementById("Projects");
let blg  = document.getElementById("blog");
let cont = document.getElementById("contact");

abt.style.display = "block";
exp.style.display = "none";
proj.style.display = "none";
blg.style.display = "none";
cont.style.display = "none";

function about(){
    abt.style.display = "block";
    exp.style.display = "none";
    proj.style.display = "none";
    blg.style.display = "none";
    cont.style.display = "none";
}
function experience(){
    abt.style.display = "none";
    exp.style.display = "block";
    proj.style.display = "none";
    blg.style.display = "none";
    cont.style.display = "none";
}
function project(){
    abt.style.display = "none";
    exp.style.display = "none";
    proj.style.display = "block";
    blg.style.display = "none";
    cont.style.display = "none";
}
function blog(){
    abt.style.display = "none";
    exp.style.display = "none";
    proj.style.display = "none";
    blg.style.display = "block";
    cont.style.display = "none";
}
function contact(){
    abt.style.display = "none";
    exp.style.display = "none";
    proj.style.display = "none";
    blg.style.display = "none";
    cont.style.display = "block";
}
// Certification
// minor projects
document.getElementById("pauseBtn").style.display = "none";
document.getElementById("playBtn").style.display = "none";
document.querySelector('.slideshow-container').onmouseover = function() {document.getElementById("buttons").style.display = "block"};
document.querySelector('.slideshow-container').onmouseleave = function() {document.getElementById("buttons").style.display = "none"};
document.getElementById('buttons').onmouseover = function() {document.getElementById("buttons").style.display = "block"};
document.getElementById('buttons').onmouseleave = function() {document.getElementById("buttons").style.display = "none"};
document.getElementById("playBtn").style.display = "none";
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function playCarousel() {
  slideInterval = setInterval(function() {
    showSlide(currentSlide + 1);
  }, 3000);
  document.getElementById("pauseBtn").style.display = "block";
  document.getElementById("playBtn").style.display = "none";
}

function pauseCarousel() {
  clearInterval(slideInterval);
  document.getElementById("pauseBtn").style.display = "none";
  document.getElementById("playBtn").style.display = "block";
}

document.getElementById('playBtn').addEventListener('click', playCarousel);
document.getElementById('pauseBtn').addEventListener('click', pauseCarousel);

showSlide(currentSlide); // Show the first slide
playCarousel(); // Start the carousel

// Contact Form

    const checkbox = document.getElementById('checkbox');
document.getElementById("submit").style.display ="none";
checkbox.addEventListener('click', function(){
    if(checkbox.checked){
    document.getElementById('submit').style.display = "block";
}else{
    document.getElementById('submit').style.display = "none";
}
})


function hideText(){
  var iconBox = document.getElementById('icons');
  iconBox.style.display = "none";
}
function showText(){
  var iconBox = document.getElementById('icons');
  iconBox.style.display = "block";
}
setInterval(hideText, 5000);



