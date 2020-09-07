$(function(){
 var $window = $(window);
    $window.on('load', function () {
        $('#pre-loader').delay(2000).fadeOut(500);
    });
 $('#full_banner').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1200,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2500,
 });
    
    $('.team_slick').slick({
   slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 });
    
    
    
 $('.scrn').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  arrows: false,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });

  $(".venobox_custom").venobox();
    
  $('.fdbck_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client'
    });
  $('.client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fdbck_main',
        dots: true,
        centerPadding: 0,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
    
    $(window).scroll(function(){
        
        var $scrolling = $(this).scrollTop();
        
        if($scrolling>=20){
             $(".full_menu").addClass("position-fixed");
        }
        else{
            $(".full_menu").removeClass("position-fixed");
        }
        
       
    })
    
    //animation scroll js
	//a[href*="#"]:not([href="#"])
	var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });
    
})