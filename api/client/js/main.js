const order = {};
let purchaseOrder = document.getElementById("purchase-order");
if (purchaseOrder) {
	purchaseOrder.onload = getOrders();
}
let vaseTotal = 0;
let flowerTotal = 0;
let combinedAmount = 0;
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

	// =============================================================================
	//   promo discount
	// =============================================================================
	$("#promo").click(function () {

		// $(".promo p").remove();
		var discount = Math.floor((Math.random() * 10) + 2);
		var discount_msg = "<p>Your Discount is " + discount + " %</p>";
		discountPercent = discount * .01;
		// console.log(discountPercent);
		$('#promoDiscount').append(discount_msg);
		$(this).unbind("click");
		$('#discount').append(discount + "%");
		let sub_total = window.localStorage.getItem("sub_Total");
		$('#sub_total').append(sub_total)
		let discountTotal = sub_total * discountPercent;
		let total = sub_total - discountTotal;
		$("#total").append(`$${total}`);

	});

});
// ======================================================================
// Loading Purchasing Order
//=======================================================================
function getOrders() {

	let authed = window.localStorage.getItem("authed");

	if (authed) {

		fetch('http://localhost:7000/purchaseOrder',{
			method: 'GET',
			headers: {
				"content-type": "application/json"
				
			}
			
		}).then(res => res.json())
		.then(orders => {
			console.log(orders);

			let table = document.getElementById("order-table")
			for (let i = 0; i < orders.length; i++) {
				let row = document.createElement("tr");
				let order_id = document.createElement("td");
				let order = document.createElement("td");
				let total = document.createElement("td");
				order_id.innerText = orders[i].order_id;
			
				order.appendChild(makeModal(orders[i]))
				row.appendChild(order_id);
				row.appendChild(order);
				row.appendChild(total);
				table.appendChild(row);

			}
		})
	}
		
	function makeModal(orderEle) {
		console.log(orderEle);

		let table = document.createElement("table");
		let tr = document.createElement("tr");
		let th1 = document.createElement("th");
		th1.innerText = "Flower Name";
		let th2 = document.createElement("th");
		th2.innerText = "Flower Color";
		let th3 = document.createElement("th");
		th3.innerText = "Flower Qty";
		tr.appendChild(th1);
		tr.appendChild(th2);
		tr.appendChild(th3);
		table.appendChild(tr)

		for (const prop in orderEle) {
			console.log(prop);
			let tr = document.createElement("tr")
			let td1 = document.createElement("td")
			let td2 = document.createElement("td")
			let td3 = document.createElement("td")
			tr.appendChild(td1)
			tr.appendChild(td2)
			tr.appendChild(td3)
			if (typeof +orderEle[prop] === "number" && +orderEle[prop] > 0) {
				td3.innerText = +orderEle[prop]

			}
			table.appendChild(tr)
			// console.log(orderEle[prop]);				
		}
		let button = document.createElement("button");
		let modal = document.createElement("div");
		modal.innerHTML = "<h3>Orders</h3>";
		modal.appendChild(table)
		modal.classList.add("hidden");

		button.onclick = (e) => {
			console.log(e.target.firstElementChild);
			if (e.target.firstElementChild.classList.contains("hidden")) {
				e.target.firstElementChild.classList.remove("hidden");
			} else {
				e.target.firstElementChild.classList.add("hidden");
			}
		}
		button.innerText = "Show Order"
		button.appendChild(modal)
		return button;
	}
}
//======================================================================
// flashing sale
// =====================================================================
function flash(t) {
	$("#jump").fadeIn(1000).fadeOut(1500);
	setTimeout("flash ()", t);
}
//=======================================================================
// ADMINISTRATION FETCH
// =====================================================================
function checkId(e) {
	e.preventDefault()
	let admin_id = document.getElementById("admin_id");
	let password = document.getElementById("password");

	let payload = {
		admin_id: admin_id.value,
		password: password.value
	}

	payload = JSON.stringify(payload)
	console.log(payload);

	fetch('http://localhost:7000/admin/', {
		method: 'POST',
		headers: {
			"content-type": "application/json",
			payload: payload
		},
		body: payload
	})
		.then((res) =>
			res.json()
		).then((res) => {
			if(res.err){
				let message = document.getElementById("message3");
				message.innerText = "The username of Password has not been authorized"
			}else{
			console.log(res)
			admin_id.value = ""
			password.value = ""
			window.localStorage.setItem("admin", res.admin_id);
			window.localStorage.setItem("authed", 'true');
			let authed = window.localStorage.getItem('authed')
			if (authed) {
				console.log("loggedIn")
				$('.hide').removeClass('hide')
				$('#message3').addClass('hide')

			}
		}}
		)
};
// ======================================================================
// Order Calculate Function
// =====================================================================
function chooseVase(e){
	e.preventDefault();
	let type = e.target.dataset.type
	let value = e.target.dataset.value;
	let vase = document.getElementById("vase");
	vaseTotal = value;
	vaseTotal = Number(value);
	console.log(vaseTotal);
	
	vase.innerText = `$${value}`
	// vase.innerText = "order 6 or more Blooms to recieve a free vase"
	order["vase"] = type;
	combinedTotal();
}
// ===============calculate cost==================================
// calculating cost and qty of boquet order
function calcTotal(e) {
		let target = e.target;
		let color = document.getElementById(`color-${e.target.name}`).value
		let partial = {number:e.target.value, color:color};
		order[e.target.name] = partial
		console.log(order);	
		let rowTotal = document.getElementsByClassName(e.target.id)[0];
		let values = document.getElementsByClassName("form-control");
		let subtotal = document.getElementById("subtotal");
		let checkoutTotal = document.getElementById("total-price");
		let total = target.value * target.dataset.value;
		let currentTotal = 0;
		rowTotal.innerText = `$${total.toFixed(2)}`;
		for (let i = 0; i < values.length; i++) {
			let rowT = document.getElementsByClassName(values[i].id)[0];
			rowT = rowT.innerText.slice(1)
			currentTotal += +rowT 
		}
		
		flowerTotal = currentTotal.toFixed(2);
		subtotal.innerText = `$${currentTotal.toFixed(2)}`;
		checkoutTotal.innerText = `$${currentTotal.toFixed(2)}`;
	
		if(target.value >= 6){
			vase.innerText = "Free with purchase"
		}
		combinedTotal();
}


function combinedTotal(){
	let checkoutTotal = document.getElementById("total-price");
	console.log(vaseTotal);
	console.log(flowerTotal);
	combinedAmount = Number(vaseTotal) + Number(flowerTotal);
	checkoutTotal.innerText = `$${combinedAmount.toFixed(2)}`;
}
//======================================================================
// ORDER FETCH
// ======================================================================
function orderIt(e) {
	e.preventDefault();
	let balance = `$${combinedAmount.toFixed(2)}`
	let order_id = document.getElementById("e_mail").value
	if(order_id){
		window.localStorage.setItem("order_id", order_id)
		let customerOrder = {
			"order_id" : order_id,
			 order: order,
			 "balance": balance
		}	
	console.log(customerOrder);
	
		fetch('http://localhost:7000/order/add', {
			method: 'POST',
			headers: {
				"content-type": "application/json",
				payload: JSON.stringify(customerOrder)
			},
			body: JSON.stringify(customerOrder)
		}).then(data => {
			console.log(data);
			inputs = " "
		})
	
	
		window.location = "http://localhost:7000/payment.html"

	}else{
		document.getElementById("message").innerText = "Please Enter An Email Address";
	}
}

// /=====================================================================
// LOG OUT
// ======================================================================
function logMeOut(e) {
	window.localStorage.removeItem("order_id");
	window.localStorage.removeItem("admin");
	window.localStorage.removeItem("authed");
	window.location.reload()
	window.location = "http://localhost:7000/index.html"
};