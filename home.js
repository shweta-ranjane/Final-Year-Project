//menubar
function myFunction() {
var x = document.getElementById("myTopnav");
if(x.className === "topnav") {
x.className +=" responsive";
} else {
x.className = "topnav";
}
}
var slideIndex = 0;
showSlides();


function togglePopup(){
	document.getElementById("popup-1")
	.classList.toggle("active")
}

//slider
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides,2000);//Change image every 2 sec
}

//read more button
const readMoreBtn = document.querySelector('.read-more');
const text = document.querySelector('.moreText');

    readMoreBtn.addEventListener('click',(e)=>{
	
	text.classList.toggle('show-more');
	if(readMoreBtn.innerText === 'Read More'){
		readMoreBtn.innerText = 'Read Less';
	}else{
		readMoreBtn.innerText = 'Read More';
	}
})

