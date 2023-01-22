// preloader

let example = ['Simple', 'Bold', 'Creative', 'Iconic', 'Brave'];

textSequence(0);
function textSequence(i) {
	if (example.length > i) {
		setTimeout(function () {
			document.getElementById("preloader").innerHTML = example[i];
			textSequence(++i);
		}, 200);
	} else if (example.length == i) {
		textSequence(0);
	}

}

function preLoader() {
	$("#preloaderBox").addClass("hide_preloder");
	$(".scale_box").css("transform", "scale(1)")
}


$(document).ready(function () {
	// pointer
	$(document).mousemove(function (e) {
		$(".pointer").css({ left: e.pageX, top: e.pageY })
	})


	// hamburger menu
	$('#hamburger').click(function () {
		$(".header_menu").toggleClass('open_menu');
		$("#hamburger").toggleClass('open');
		$("body").toggleClass("lock");
		$("#header").toggleClass("white_header");
	});

	// GSAP
	gsap.registerPlugin(ScrollTrigger);

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".locomotive-scroll"),
		smooth: true
	});

	locoScroll.on("scroll", ScrollTrigger.update);


	ScrollTrigger.scrollerProxy(".locomotive-scroll", {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},
		pinType: document.querySelector(".locomotive-scroll").style.transform ? "transform" : "fixed"
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.defaults({ scroller: ".locomotive-scroll" });

	//back to top
	const backToTop = document.querySelector("#backToTop")
	backToTop.addEventListener('click', function (e) {
		e.preventDefault();
		const target = this.getAttribute("href")
		locoScroll.scrollTo(target);

	})

	// scroll down
	const scrollDown = document.querySelector("#scrollDown")
	backToTop.addEventListener('click', function (e) {
		e.preventDefault();
		const target = this.getAttribute("href")
		locoScroll.scrollTo(target);

	})

	// for header
	ScrollTrigger.create({
		start: "top -10%",
		trigger: ".locomotive-scroll",
		toggleClass: { targets: "header", className: "change_bg" }
	})

	// img to move up 
	gsap.to(".img_one_move_top", {
		y: "-100%",
		duration: 4,
		scrollTrigger: {
			trigger: "#animated-thumbnails",
			start: "top",
			end: "bottom 50%",
			scrub: 4,
			toggleActions: "restart none none none",
		}
	})

	gsap.to(".img_two_move_top", {
		y: "-80%",
		duration: 4,
		scrollTrigger: {
			trigger: ".trigger_img_two_row",
			start: "top 10%",
			end: "bottom 50%",
			scrub: 4,
			toggleActions: "restart none none none",
		}
	})

	ScrollTrigger.create({
		start: "top 50%",
		trigger: ".animate_row",
		scrub: 2,
		toggleActions: "restart none none none",
		toggleClass: { targets: ".color_to_animate", className: "w_100" }
	})


	ScrollTrigger.create({
		start: "top 50%",
		trigger: ".animate_row_two",
		scrub: 2,
		toggleActions: "restart none none none",
		toggleClass: { targets: ".text_two", className: "w_100" }
	})

	// gallery

	$('.gallery .gallery_sab_box .bg').each(function () {
		$(this).wrapAll('<a href="" data-fancybox="gallery"></a>');
	});

	$('.gallery .gallery_sab_box a').each(function () {
		var link = $(this).children('.bg').attr('src');
		console.log(link);
		link = link.replace(/(url\(|\)|")/g, '');
		$(this).attr('href', link);
	});

	$("[data-fancybox]").fancybox({
		loop: true,
		buttons: [
			"zoom",
			"share",
			"slideShow",
			"fullScreen",
			"download",
			"thumbs",
			"close"
		]
	});

    const linkText =[];
	let menuLink = document.querySelectorAll('.menu_link li a');
    menuLink.forEach((item)=>{
		linkText.push(item.innerHTML);
	})

	setTimeout(() => {
	   for (let i = 0; i < menuLink.length; i++) {
		  menuLink[i].setAttribute('data-content', `${linkText[i]}`);			
	   }
	}, 1)

});






























