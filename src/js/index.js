$(window).scroll(function (event) {
	let scrollTop = $(window).scrollTop();

	if (scrollTop >= 600) {
		$("header").addClass("bg")
	} else {
		$("header").removeClass("bg")
	}
});

$("#testimonials-carousel").owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	autoplay: true,
	slideTransition: "linear",
	responsive: {
		0: {
			items: 1,
			margin: 0,
			center: true,
		},
		992: {
			items: 1,
			margin: 0,
		},
	},
});

$("#testimonials-carousel-2").owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout: 5000,
	autoplaySpeed: 5000,
	responsive: {
		0: {
			items: 5,
			margin: 0,
			center: true,
		},
		992: {
			items: 5,
			margin: 0,
		},
	},
});