/*-----------------------------------------------------------------

Template Name: AIForge - AI Startup & Technology HTML Template 
Author:  namespace-it
Author URI: https://themeforest.net/user/namespace-itportfolio
Version: 1.0.0
Description: AIForge - AI Startup & Technology HTML Template <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        // $(window).scroll(function() {
        //     if ($(this).scrollTop() > 250) {
        //         $("#header-sticky").addClass("sticky");
        //     } else {
        //         $("#header-sticky").removeClass("sticky");
        //     }
        // });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Hero-3 Slider Start <<//

         // Hero Slider Start <<//
         const sliderActive1 = ".news-hero-slider";
         const sliderInit1 = new Swiper(sliderActive1, {
             loop: true,
             slidesPerView: 1,
             effect: "fade",
             speed: 2000,
             autoplay: {
                 delay: 3000,
                 disableOnInteraction: false,
             },
             navigation: {
                 nextEl: ".array-prev",
                 prevEl: ".array-next",
             },
 
         });
 
         // content animation when active start here
         function animated_swiper(selector, init) {
             var animated = function animated() {
                 $(selector + " [data-animation]").each(function() {
                     var anim = $(this).data("animation");
                     var delay = $(this).data("delay");
                     var duration = $(this).data("duration");
                     $(this)
                         .removeClass("anim" + anim)
                         .addClass(anim + " animated")
                         .css({
                             webkitAnimationDelay: delay,
                             animationDelay: delay,
                             webkitAnimationDuration: duration,
                             animationDuration: duration,
                         })
                         .one("animationend", function() {
                             $(this).removeClass(anim + " animated");
                         });
                 });
             };
             animated();
             init.on("slideChange", function() {
                 $(sliderActive1 + " [data-animation]").removeClass("animated");
             });
             init.on("slideChange", animated);
         }
         
         animated_swiper(sliderActive1, sliderInit1);


        //>> Brand Slider Start <<//
        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if($('.testimonail-slider').length > 0) {
            const testimonailSlider = new Swiper(".testimonail-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 3000,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    prevEl: ".array-next",
                    nextEl: ".array-prev",
                },
            });
        }

        if($('.testimonial-slider-3').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
                spaceBetween: 30,
                speed: 3000,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            });
        }

        //>> Showcase Slider Start <<//
        if($('.showcase-slider').length > 0) {
            const showcaseSlider = new Swiper(".showcase-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        

        //>> Progress Bar Js Start <<//
        $('.progress-bar').waypoint(function() {
            $('.progress-bar').css({
                animation: "animate-positive 2.6s",
                opacity: "1"
            });
        }, { offset: '75%' });

        //>> Back To Top Slider Start <<//
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        $("#back-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });
        
        //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });




    }); // End Document Ready Function



    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
   

})(jQuery); // End jQuery



//image slider
(function($) {
    "use strict";
    $.fn.sliderResponsive = function(settings) {
      
      var set = $.extend({
          slidePause: 3000,
          fadeSpeed: 800,
          autoPlay: "on"
      }, settings);

      var $slider = $(this);
      var slides = $slider.find(".slide");
      var size = slides.length;
      var position = 0;
      var sliderIntervalID;

      // Initialize first slide
      slides.eq(0).addClass("show");

      if (set.autoPlay === "on") {
          startSlider(); 
      }

      function startSlider() {
        sliderIntervalID = setInterval(function() {
          nextSlide();
        }, set.slidePause);
      }

      function nextSlide() {
        position = (position + 1) % size;
        changeCarousel(position);
      }

      function changeCarousel(position) {
        slides.removeClass("show").css("opacity", "0");
        slides.eq(position).addClass("show").css("opacity", "1");
      }

      return $slider;
    };
})(jQuery);

$(document).ready(function() {
    $("#slider3").sliderResponsive();
});
  //End image slider






window.addEventListener("scroll", function () {
    const header = document.getElementById("header-sticky");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



//slider

const imageTrack = document.querySelector('.image-track');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0;
const visibleImages = 3; // Number of visible images at a time
const totalImages = imageTrack.children.length;

// Clone the first 3 images and append them to the end
for (let i = 0; i < visibleImages; i++) {
    const clone = imageTrack.children[i].cloneNode(true);
    imageTrack.appendChild(clone);
}

// Clone the last 3 images and prepend them to the start
for (let i = totalImages - 1; i >= totalImages - visibleImages; i--) {
    const clone = imageTrack.children[i].cloneNode(true);
    imageTrack.prepend(clone);
}

// Adjust the currentIndex to account for the prepended clones
currentIndex = visibleImages;

// Update the slider position to show the first set of original images
updateSlider();

prevArrow.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        // Jump to the last set of cloned images without animation
        currentIndex = totalImages + visibleImages - 1;
        imageTrack.style.transition = 'none';
        updateSlider();
        // Force reflow to apply the transition
        void imageTrack.offsetWidth;
        // Move to the previous set with animation
        currentIndex--;
        imageTrack.style.transition = 'transform 0.5s ease-in-out';
    }
    updateSlider();
});

nextArrow.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalImages + visibleImages - 1) {
        // Jump to the first set of cloned images without animation
        currentIndex = visibleImages;
        imageTrack.style.transition = 'none';
        updateSlider();
        // Force reflow to apply the transition
        void imageTrack.offsetWidth;
        // Move to the next set with animation
        currentIndex++;
        imageTrack.style.transition = 'transform 0.5s ease-in-out';
    }
    updateSlider();
});

function updateSlider() {
    const frameWidth = imageTrack.clientWidth / visibleImages;
    const offset = -currentIndex * frameWidth;
    imageTrack.style.transform = `translateX(${offset}px)`;
}


// FAQ
$(document).ready(function(){
    $('.van-slider').slick({
      dots: true, // Show dot indicators
      arrows: true, // Show navigation arrows
      infinite: true, // Infinite looping
      speed: 300, // Transition speed
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1 // Number of slides to scroll
    });
  });


  $('.van-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Autoplay speed in milliseconds
  responsive: [
    {
      breakpoint: 768, // Adjust settings for smaller screens
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});




let activeIndex = 0; // Renamed from currentIndex
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextItem() {
    activeIndex = (activeIndex + 1) % totalItems; // Updated variable name
    showItem(activeIndex); // Updated variable name
}

function prevItem() {
    activeIndex = (activeIndex - 1 + totalItems) % totalItems; // Updated variable name
    showItem(activeIndex); // Updated variable name
}

// Show the first item initially
showItem(activeIndex); // Updated variable name

// Set an interval to automatically move to the next item
setInterval(nextItem, 3000); // Change image every 3 seconds












