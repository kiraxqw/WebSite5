$( function() {
    $( "#dialog" ).dialog({
		autoOpen: false, width: 400,
		show: {
			duration: 1000
		},
		hide: {
			duration: 1000
		}
	});
  });

$(".startBid").on("click", function() {
	$("#dialog").dialog("open");
});

$( function() {
    $( "#dialog2" ).dialog({
		autoOpen: false, width: 400,
		show: {
			duration: 1000
		},
		hide: {
			duration: 1000
		}
	});
  });

$(".div_nav5").on("click", function() {
	$("#dialog2").dialog("open");
});



$(document).ready(function () {
	let swiper = new Swiper('.slider_cont', {
		slidesPerView: 2.9, //how many elements
		spaceBetween: 40, //space between elements
		loop: true, // 
		centeredSlides: true,
		// initialSlide: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
	})
})