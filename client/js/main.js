let purchasingOrder = document.getElementById("purchasing-order");
if(purchasingOrder){
	purchasingOrder.onload = getOrders();
}
AOS.init({
	duration: 800,
	easing: 'slide'
});
$(document).ready(function ($) {
	flash(1000);
	"use strict";
	$(window).stellar({
		responsive: false,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function () {
		$('.carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

		$('.nonloop-block-13').owlCarousel({
			center: false,
			items: 1,
			loop: false,
			stagePadding: 0,
			margin: 20,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive: {
				600: {
					margin: 20,
					items: 2
				},
				1000: {
					margin: 20,
					items: 2
				},
				1200: {
					margin: 20,
					items: 3
				}
			}
		});

		$('.loop-block-31').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			autoplay: true,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});

		$('.nonloop').owlCarousel({
			center: true,
			items: 2,
			loop: false,
			margin: 10,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive: {
				600: {
					items: 2
				}
			}
		});
	};
	carousel();

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.ftco-number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();



	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('#checkin_date, #checkout_date').datepicker({
		'format': 'd MM, yyyy',
		'autoclose': true
	});

	// ===================================================
	//   promo discount
	// ========================================================
	$("#promo").click(function () {

		// $(".promo p").remove();
		var discount = Math.floor((Math.random() * 60) + 5);
		var discount_msg = "<p>Your Discount is " + discount + " %</p>";
		// console.log(discount);
		$(this).append(discount_msg);
		$(this).unbind("click");
		$('#discount').append(discount + "%");
	});

//================================================================
// order total
// =============================================================

// 	var order_total = {
// 		init: function () {

// 			for (let i in params) {
// 				let keyValue = params[i].split('=');
// 				keyValue[0].value = keyValue[1];
// 			}

// 			let checkout_total = 0,
// 				checkout_total = $('.checkout_total'),
// 				$qtys = $('.bab_item').find('input[type="number"]');

// 			$qtys.each(function (i) {
// 				checkout_total += parseInt($(this)[0].value);
// 			});

// 			checkout_total.html(checkout_total);
// 			$('#checkoutTotal').html('$' + Number(parseFloat($('input[name="unitprice"]')[0].value)).toFixed(2));

// 			window.localStorage.setItem("checkout_total", total);
// 		}
// 	};
// console.log(order_total);

});
// Loading Purchasing Order
function getOrders(){
	let authed = window.localStorage.getItem("authed");
	if(authed){
		
		fetch('http://www.localhost:7000/purchasingOrder').then(res=>res.json()).then(orders=>{
			let table = document.getElementById("order-table")
			for (let i = 0; i < orders.length; i++) {
				let row = document.createElement("tr");
				let order_id = document.createElement("td");
				let order = document.createElement("td");
				let total = document.createElement("td");
				order_id.innerText = orders[i].order_id;
				order.appendChild(makeModal())
				row.appendChild(order_id);
				row.appendChild(order);
				row.appendChild(total);
				table.appendChild(row);
console.log();

			}
		})
	}
	function makeModal(){
		let button = document.createElement("button");
		let modal = document.createElement("div");
		modal.innerHTML = "<h3>Orders</h3>";
		modal.classList.add("hidden");
		// modal.appendChild()
		
		button.onclick = (e)=>{
			console.log(e.target.firstElementChild);
			if(e.target.firstElementChild.classList.contains("hidden")){
				e.target.firstElementChild.classList.remove("hidden");
			}else{
				e.target.firstElementChild.classList.add("hidden");
			}
		}
		button.innerText = "Show Order"
		button.appendChild(modal)
		return button;
	}
}
//===========================================================================
// flashing sale
// ==========================================================================
function flash(t) {
	$("#jump").fadeIn(1000).fadeOut(1500);
	setTimeout("flash ()", t);
}
//==============================================================================
// ADMINISTRATION FETCH
// ============================================================================
function checkId(e) {
	e.preventDefault()
	let employee_id = document.getElementById("employee_id");
	let employee_password = document.getElementById("employee_password");

	let payload = {
		employee_id: employee_id.value,
		employee_password: employee_password.value
	}

	payload = JSON.stringify(payload)
	console.log(payload);

	fetch('http://localhost:7000/admin/logIn', {
		method: 'POST',
		mode: "cors",
		headers: {
			"content-type": "application/json",
			payload: payload
		},
		body: payload
	})
		.then((res) =>
			res.json()
		).then((res) => {
			console.log(res)
			employee_id.value = ""
			employee_password.value = ""
			window.localStorage.setItem("admin", res.employee_Id);
			window.localStorage.setItem("authed", res.auth);
			let authed = window.localStorage.getItem('authed')
			if (authed) {
				console.log("loggedIn")
				$('.hide').removeClass('hide')

			}
		}
		)
};
// =========================================================================
// SUBSCRIBE FUNCTION
// ===========================================================================
function enterPromo(e) {
	e.preventDefault()
	let e_mail = document.getElementById("e_mail").value
	let p = document.createElement("p")
	document.getElementsByTagName("p")
	p.innerText = "Thank You"
	document.getElementById("subscribe").appendChild(p)
	window.localStorage.setItem("order_id", e_mail);
}
//==============================================================================
// ORDER FETCH
// ============================================================================
function orderIt(e) {
	e.preventDefault();
	let order_id = window.localStorage.getItem("order_id")
	let payload = {
		order_id: order_id
	};
	let inputs = document.getElementsByClassName("order-input");
	for (let i = 0; i < inputs.length; i++) {
		payload[inputs[i].id] = inputs[i].value
	}
	// payload.id = order_id
	console.log(payload);

	// calculate cost

	
	// window.localStorage.setItem("checkout_total", total);
	
	fetch('http://localhost:7000/order/add', {
		method: 'POST',
		mode: "cors",
		headers: {
			"content-type": "application/json",
			payload: JSON.stringify(payload)
		},
		body: JSON.stringify(payload)
	}).then(data => {
			console.log(data);
			inputs = " "
		

		}

		)
}
//============================================================================
// PAYMENT FETCH
// ============================================================================
function payForIt(e) {
	e.preventDefault()
	let checkout_total = window.localStorage.getItem("checkout_total")
	let order_id = window.localStorage.getItem("order_id")
	let payload = {
		order_id: order_id,
		checkout_total:checkout_total
	}
	let userInput = document.getElementsByTagName("input")
	for (let i = 0; i < userInput.length; i++) {
		let input = userInput[i]
		if (input.type === "radio") {
			if (input.radio) {
				payload[input.id] = input.checked
			}
		} else {
			payload[input.id] = input.value
		}
	}
	// payload.id = order_id
	console.log(payload)
	payload = JSON.stringify(payload)
	// sending the HTTP POST req along w/ form data to node server
	fetch('http://localhost:7000/payment/add', {
		method: 'POST',
		mode: "cors",
		headers: {
			"content-type": 'application/json',
			"accounts": payload

		},
		body: payload
	})
		.then((res) =>
			res.json()
		).then((data) => {
			window.localStorage.removeItem("order_id")
			// if(data.message){
			//    console.log(data, "data");
			//    let d = JSON.stringify(data);
			//    console.log(d);
			//    window.localStorage.setItem("order_id", d)
			// }       
		});

};
// ========================================================
// LOG OUT
// ==========================================================
function logMeOut(e) {
	window.localStorage.removeItem("order_id");
	window.localStorage.removeItem("admin");
	window.localStorage.removeItem("authed");
	window.location.reload()
	window.location = "http://localhost:7000/index.html"
};