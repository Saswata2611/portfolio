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
// Circular Progressbar
$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 180,
                    thickness: 30,
                    emptyFill: "rgba(0,0,0, .2)",
                    fill: {
                        color: '#fb4f14'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
    
    
    

}); //end document ready function