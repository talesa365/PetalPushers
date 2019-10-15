 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {
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
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
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
	    responsive:{
        600:{
        	margin: 20,
          items: 2
        },
        1000:{
        	margin: 20,
          items: 2
        },
        1200:{
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
	    items:2,
	    loop:false,
	    margin:10,
	    nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	    responsive:{
        600:{
          items:2
        }
	    }
		});
	};
	carousel();

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.ftco-number').each(function(){
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

		} , { offset: '95%' } );

	}
	counter();
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
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
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
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



});
//flashing sale
function flash(t) {
	$("#jump").fadeIn(1000).fadeOut(1500);
	setTimeout("flash ()",t);
  }

//==============================================================================
// ADMINISTRATION FETCH
// ============================================================================

function checkId(e){
	e.preventDefault()
	let employee_id = document.getElementById("employee_id");
	let employee_password = document.getElementById("employee_password");

	let payload = {
		employee_id: employee_id.value,
		employee_password:employee_password.value
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
		body:payload
	})
	.then((res)=>
		res.json()
	).then((res) =>{
		console.log(res)
		window.localStorage.setItem("admin",res.employee_Id);
		window.localStorage.setItem("authed",res.auth);
	}
		)
}
//==============================================================================
// ORDER FETCH
// ============================================================================

  
function orderIt(e){
    e.preventDefault();
	let inputs = document.getElementsByClassName("order-input");
	let payload = {};
	for (let i = 0; i < inputs.length; i++) {
		payload[inputs[i].id] = inputs[i].value
	}
	console.log(payload);
	
	fetch('http://localhost:7000/order/add', {
		method: 'POST',
		mode: "cors",
		headers: {
			"content-type": "application/json",
			payload: JSON.stringify(payload)
		},
		body:JSON.stringify(payload)
	})
	.then((res)=>
		res.json()
	).then((res) =>
		console.log(res)
	
		)
}


  //============================================================================
// PAYMENT FETCH
// ============================================================================

function payForIt(e){
	e.preventDefault()
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let address = document.getElementById('address');
let apart = document.getElementById('apart');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip_code = document.getElementById('zip_code');
let phone = document.getElementById('phone');
let e_mail = document.getElementById('e_mail');
let promo = document.getElementById('promo');
let payment = function paymentMethod(){
	let items= document.getElementsByTagName("input");
    let method = {};
    for (let val of items) {
        if(val.type === "radio"){
            method[val.name] = val.checked
        }else{
            method[val.name] = val.value
        }
        console.log(method)

    }
}
let payload = {
    first_name: first_name,
    last_name: last_name,
    address: address,
    apart : apart,
    city: city,
    state : state,
    zip_code: zip_code, 
    phone: phone, 
   e_mail: e_mail,
    promo : promo,
    payment: payment
}
payload = JSON.stringify(payload)

fetch('http://localhost:7000/payment/add',{
	method: "POST",
	mode: "cors",
	headers: {
		"content-type": "application/json",
		payload: payload
	},
	body:payload
})
	.then((res)=>

	console.log(res),
	console.log(payload)
		

	)
}


