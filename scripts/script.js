//responsive button
// $(document).ready(function(){
// 	$("#navi").mousedown(function(){
// 		$("#navi").css({"background-color": "#FF9800"});
// 	});

// 	$("#navi").mouseup(function(){
// 		$("#navi").css({"background-color": "#19477D"});
// 	});
// });


//scroll down btn

// $(document).ready(function(){
// 	$(".scroll-btn").mousedown(function(){
// 		$(".scroll-btn").css({"height": "44px", "font-size": "19px"});
// 	});

// 	$(".scroll-btn").mouseup(function(){
// 		$(".scroll-btn").css({"height": "45px", "font-size": "20px"});
// 	});
// });


// Bars
var threeBars = document.getElementById("navi");
threeBars.addEventListener("mousedown", barmsdown);
threeBars.addEventListener("mouseup", barmsup);

function barmsdown(){
	threeBars.style.backgroundColor = "#FF9800";
}
function barmsup(){
	threeBars.style.backgroundColor = "#19477D";
}

//collapsible
$(document).ready(function(){
  $(".collapse a").click(function(){
    $(".collapse").collapse('hide');
  });
});

//ScrollDown Btn
var scrlbtn = document.querySelector(".scroll-btn");
scrlbtn.addEventListener("mousedown", scrlBtnmsdown);
scrlbtn.addEventListener("mouseup", scrlBtnmsup);

function scrlBtnmsdown(){
	scrlbtn.style.height = "44px";
	scrlbtn.style.fontSize = "19px";
}
function scrlBtnmsup(){
	scrlbtn.style.height = "45px";
	scrlbtn.style.fontSize = "20px";
}

//Slider
const slide = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let counter = 1;
const size = slideImg[0].clientWidth;

slide.style.transform = "translateX(" + (-size * counter) + "px)";

var timer = setInterval(autoSlide, 15000);

function autoSlide(){
	if (counter >= slideImg.length - 1) {
		return;
	}
	slide.style.transition = "transform 0.6s ease-in-out";
	counter ++;
	slide.style.transform = "translateX(" + (-size * counter) + "px)";

}

nextBtn.addEventListener("click", () =>{
	clearInterval(timer);
	timer = setInterval(autoSlide, 15000);
	if (counter >= slideImg.length - 1) {
		return;
	}
	slide.style.transition = "transform 0.6s ease-in-out";
	counter ++;
	slide.style.transform = "translateX(" + (-size * counter) + "px)";

});

prevBtn.addEventListener("click", () =>{
	if (counter <= 0) {
		return;
	}
	slide.style.transition = "transform 0.6s ease-in-out";
	counter --;
	slide.style.transform = "translateX(" + (-size * counter) + "px)";

});

slide.addEventListener("transitionend", () =>{
	if (slideImg[counter].id === "lastClone") {
		slide.style.transition = "none";
		counter = slideImg.length - 2;
		slide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

	if (slideImg[counter].id === "firstClone") {
		slide.style.transition = "none";
		counter = slideImg.length - counter;
		slide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

});