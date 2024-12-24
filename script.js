Splitting();
gsap.registerPlugin(CustomEase);

function pastafarfalle() {
	$(".main-1").css("opacity", 1);
	$(".main-2").css("opacity", 1);
	$(".main-3").css("opacity", 0);
	gsap.to("svg .main-2", {
		duration: 0.6,
		ease: "expo.out",
		morphSVG: "#far-2"
	});
	gsap.to("svg .main-1", {
		duration: 0.6,
		ease: "expo.out",
		morphSVG: "#far-1"
	});
}

function pastaspaghetti() {
	$(".main-1").css("opacity", 1);
	$(".main-2").css("opacity", 1);
	$(".main-3").css("opacity", 1);
	gsap.to(".main-1", { duration: 0.6, ease: "expo.out", morphSVG: "#spa-1" });
	gsap.to(".main-2", { duration: 0.6, ease: "expo.out", morphSVG: "#spa-2" });
	gsap.to(".main-3", { duration: 0.6, ease: "expo.out", morphSVG: "#spa-3" });
}

function pastafusilli() {
	$(".main-1").css("opacity", 1);
	$(".main-2").css("opacity", 0);
	$(".main-3").css("opacity", 1);
	gsap.to(".main-3", { duration: 0.6, ease: "expo.out", morphSVG: "#fus-3" });
	gsap.to(".main-1", { duration: 0.6, ease: "expo.out", morphSVG: "#fus-1" });
}

function pastapenne() {
	$(".main-1").css("opacity", 1);
	$(".main-2").css("opacity", 0);
	$(".main-3").css("opacity", 1);
	gsap.to(".main-3", { duration: 0.6, ease: "expo.out", morphSVG: "#pen-1" });
	gsap.to(".main-1", { duration: 0.6, ease: "expo.out", morphSVG: "#pen-3" });
}

function pastaravioli() {
	$(".main-1").css("opacity", 1);
	$(".main-2").css("opacity", 1);
	$(".main-3").css("opacity", 1);

	gsap.to(".main-1", { duration: 0.6, ease: "expo.out", morphSVG: "#rav-1" });
	gsap.to(".main-2", { duration: 0.6, ease: "expo.out", morphSVG: "#rav-2" });
	gsap.to(".main-3", { duration: 0.6, ease: "expo.out", morphSVG: "#rav-3" });
}

$(".menu__items a").on("click", function () {
	var pastaChosen = $(this).data("destination");
	var currentPasta = $(".body-clone").attr("data-pasta");
	if (pastaChosen !== currentPasta) {
		eval("pasta" + pastaChosen + "()");
		swapContent(pastaChosen);
	} 
	closeMenu();
	$(".menu").toggleClass("active");
});

function swapContent(item) {
	const tl = new TimelineMax({ paused: true });
	tl
		.add("swap-out")
		.to(".pasta__background", {
			css: {
				opacity: 0,
			},
			ease: Quad.easeInOut,
			duration: 0.1
		})
		.to(
			"h2 .char",
			{
				css: { translateY: "-100%", opacity: 0 },
				ease: Quad.easeInOut,
				stagger: 0.03
			}
		)
		.to(".pasta__dish", {
			css: {
				opacity: 0,
				translateX: "25% ",
				translateY: "-10%",
				rotate: "45deg",
				transformOrigin: "center center"
			},
			ease: Quad.easeInOut,
			duration: 0.5
		}, "-=1.5")
		.to(
			".pasta__info__recipes a span",
			{
				css: { translateY: "100%", opacity: 0 },
				ease: "power4.out",
				duration: 0.5
			},
			"swap-out"
		)
		.add("swap-out-complete")
		.add(test)
		.add("swap-in")
		.to("h2 .char", {
			css: { translateY: 0, opacity: 1 },
			ease: Quad.easeInOut,
			duration: 1,
			stagger: 0.01
		}, "swap-in")
		.to(
			".pasta__background",
			{
				css: { opacity: 0.3 },
				ease: Quad.easeInOut,
				duration: .5
			},
			"swap-in"
		)
		.to(
			".pasta__info__recipes a span",
			{
				css: { translateY: "0", opacity: 1 },
				ease: "power4.out",
				duration: 1
			},
			"swap-in+=0.4"
		)
		.to(
			".pasta__dish",
			{
				css: {
					opacity: 1,
					translateX: 0,
					translateY: 0,
					rotate: 0,
					transformOrigin: "center center"
				},
				ease: Quad.easeInOut,
				duration: 0.8
			},
			"swap-in+=0.45"
		);

	tl.restart();
	tl.tweenTo("swap-out-complete");

	function test() {
		$(".body-clone").attr("data-pasta", item);
		tl.resume();
	}
}

$(".menu__link").on("click", function () {
	$(".menu").toggleClass("active");
	if ($(".menu").hasClass("active")) {
		openDatMenu();
	} else {
		closeMenu();
	}
});

function openDatMenu() {
	TweenMax.to(".menu__items", {
		css: { scale: 1, opacity: 1, zIndex: 10, visibility: "visible" },
		ease: Quad.easeInOut,
		duration: 0.2
	});
	TweenMax.to(".menu__items a", {
		css: { backgroundPosition: "-100% 0" },
		ease: Quad.easeInOut,
		duration: 0.5,
		stagger: 0.2,
		delay: 0.2
	});
	TweenMax.to(".menu__items a span", {
		css: { opacity: 1, translateX: "20%" },
		ease: Quad.easeInOut,
		duration: 0.3,
		stagger: 0.2,
		delay: 0.4
	});
	TweenMax.to(".menu__items a img", {
		css: { opacity: 0.4, translateX: "-20%" },
		ease: Quad.easeInOut,
		duration: 0.3,
		stagger: 0.2,
		delay: 0.5
	});
}

function closeMenu() {
	TweenMax.to(".menu__items", {
		css: { scale: 0, opacity: 0, zIndex: -1, visibility: "hidden" },
		ease: Quad.easeInOut,
		duration: 0.4,
		delay: 0.5
	});
	TweenMax.to(".menu__items a", {
		css: { backgroundPosition: "0" },
		ease: Quad.easeInOut,
		duration: 0.5
	});
	TweenMax.to(".menu__items a span", {
		css: { opacity: 0, translateX: "-20%" },
		ease: Quad.easeInOut,
		duration: 0.3
	});
	TweenMax.to(".menu__items a img", {
		css: { opacity: 0, translateX: "20%" },
		ease: Quad.easeInOut,
		duration: 0.2
	});
}
