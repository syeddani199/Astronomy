
  //////// Onclick to specific Div Function:

		$(".btn1").click(function() {
			$('html,body').animate({
				scrollTop: $(".radius").offset().top},
				'slow');
		});
	
//////// Readmore Button Function:

		function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

  //////// Middle Nav Toggle Function:

$(document).ready(function(show){
    $("#btn1").click(function(show){
		$("#container-1").toggle(1000);
		$("#container-2").hide(1000);
		$("#container-3").hide(1000);
		$("#container-4").hide(1000);
		$("#container-5").hide(1000);
		$("#container-6").hide(1000);
		$("#container-7").hide(1000);
	});
	$("#btn2").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").toggle(1000);
		$("#container-3").hide(1000);
		$("#container-4").hide(1000);
		$("#container-5").hide(1000);
		$("#container-6").hide(1000);
		$("#container-7").hide(1000);
	});
	$("#btn3").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").hide(1000);
		$("#container-3").toggle(1000);
		$("#container-4").hide(1000);
		$("#container-5").hide(1000);
		$("#container-6").hide(1000);
		$("#container-7").hide(1000);
	});
	$("#btn4").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").hide(1000);
		$("#container-3").hide(1000);
		$("#container-4").toggle(1000);
		$("#container-5").hide(1000);
		$("#container-6").hide(1000);
		$("#container-7").hide(1000);
	});
	$("#btn5").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").hide(1000);
		$("#container-3").hide(1000);
		$("#container-4").hide(1000);
		$("#container-5").toggle(1000);
		$("#container-6").hide(1000);
		$("#container-7").hide(1000);
	});
	$("#btn6").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").hide(1000);
		$("#container-3").hide(1000);
		$("#container-4").hide(1000);
		$("#container-5").hide(1000);
		$("#container-6").toggle(1000);
		$("#container-7").hide(1000);
	});
	$("#btn7").click(function(show){
		$("#container-1").hide(1000);
		$("#container-2").hide(1000);
		$("#container-3").hide(1000);
		$("#container-4").hide(1000);
		$("#container-5").hide(1000);
		$("#container-6").hide(1000);
		$("#container-7").toggle(1000);
	});
  });

    //////// Onload Body Animation:

  ScrollReveal({ 
	reset: false, 
	distance: '60px',
	duration: 2500,
	delay: 400
});
ScrollReveal().reveal('.animation1', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.animation2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.animation3', { delay: 500, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.animation4', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.animation5', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.animation6', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.animation7', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.btnanimation1', { delay: 500, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.btnanimation2', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.btnanimation3', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.btnanimation4', { delay: 800, origin: 'bottom' });
ScrollReveal().reveal('.btnanimation5', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.btnanimation6', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.btnanimation7', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.btnanimation8', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.card-1', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.card-two', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.card-three', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.card-four', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.footerlinkanimation', { delay: 350, origin: 'bottom', interval: 100 });

//////// Contact US Form Validation:

const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');