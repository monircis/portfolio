(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


    });


    jQuery(window).load(function(){

       $('.responsive').slick({
		  dots: false,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
		  infinite: false,
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 3,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		}); 
    });

    $( '#topheader .navbar-nav a' ).on( 'click', function () {
		$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	// seclect button detials page
	$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});




}(jQuery));	