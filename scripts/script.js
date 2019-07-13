// iconbar
// var navi = document.getElementById("navi");
// navi.addEventListener("mousedown", barEnter);
// navi.addEventListener("mouseup", barOut);

// function barEnter(){
// 	navi.style.backgroundColor = "#FF9800";
// }

// function barOut(){
// 	navi.style.backgroundColor = "#19477D"
// }

//BARCLICK
$(document).ready(function(){
	$("#navi").mousedown(function(){
		$("#navi").css({"background-color": "#FF9800"});
	});

	$("#navi").mouseup(function(){
		$("#navi").css({"background-color": "#19477D"});
	});
});

//collapse
$(document).ready(function(){
  $(".collapse a").click(function(){
    $(".collapse").collapse('hide');
  });
  
  // $(".collapse li").click(function(){
  //   $(".collapse").collapse('show');
  // });
});

//scroll btn

$(document).ready(function(){
	$(".scroll-btn").mousedown(function(){
		$(".scroll-btn").css({"height": "44px", "font-size": "19px"});
	});

	$(".scroll-btn").mouseup(function(){
		$(".scroll-btn").css({"height": "45px", "font-size": "20px"});
	});
});

