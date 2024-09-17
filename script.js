const navBar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transform = `translateY(-105%)`;
  } else {
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});



let slideIndex = 0;
showSlides();

function showSlides(){
	let i ;
	let slides = document.getElementsByClassName("slider");
	let dots = document.getElementsByClassName("dot");
	for(i = 0 ; i < slides.length ; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length){
		slideIndex  = 1 ;
	}
	for(i = 0 ; i < dots.length ; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = " block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 3000);
}