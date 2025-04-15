/* ====================================================
 * jQuery Is In Viewport.
 * https://github.com/frontid/jQueryIsInViewport
 * Marcelo IvÃ¡n Tosco (capynet)
 * Inspired on https://stackoverflow.com/a/40658647/1413049
 * ==================================================== */
!function ($) {
  'use strict'

  var Class = function (el, cb) {
    this.$el = $(el);
    this.cb = cb;
    this.watch();
    return this;
  };

  Class.prototype = {

    /**
     * Checks if the element is in.
     *
     * @returns {boolean}
     */
    isIn: function isIn() {
      var _self = this;
      var $win = $(window);
      var elementTop = _self.$el.offset().top;
      var elementBottom = elementTop + _self.$el.outerHeight();
      var viewportTop = $win.scrollTop();
      var viewportBottom = viewportTop + $win.height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    },

    /**
     * Launch a callback indicating when the element is in and when is out.
     */
    watch: function () {
      var _self = this;
      var _isIn = false;

      $(window).on('resize scroll', function () {

        if (_self.isIn() && _isIn === false) {
          _self.cb.call(_self.$el, 'entered');
          _isIn = true;
        }

        if (_isIn === true && !_self.isIn()) {
          _self.cb.call(_self.$el, 'leaved');
          _isIn = false;
        }

      })
    }


  };

  // jQuery plugin.
  //-----------------------------------------------------------
  $.fn.isInViewport = function (cb) {
    return this.each(function () {
      var $element = $(this);
      var data = $element.data('isInViewport');
      if (!data) {
        $element.data('isInViewport', (new Class(this, cb)));
      }
    })
  }

}(window.jQuery);

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
          // Check if this item is already active
          const isActive = item.classList.contains('active');

          // Close all FAQ items
          faqItems.forEach((otherItem) => {
              const otherAnswer = otherItem.querySelector('.faq-answer');
              if (otherAnswer) { // Check if `.faq-answer` exists
                  otherItem.classList.remove('active');
                  otherAnswer.style.maxHeight = null;
              }
          });

          // If it was not active before, open it
          if (!isActive && answer) {
              item.classList.add('active');
              answer.style.maxHeight = answer.scrollHeight + "px";
          }
      });
  });
});



//filter tabs
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-tabs button");
  const blogCards = document.querySelectorAll(".blog-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Show or hide blog cards based on the filter
      blogCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filter === "all" || cardCategory === filter) {
          card.style.display = "block"; // Show the card
        } else {
          card.style.display = "none"; // Hide the card
        }
      });
    });
  });
});





document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!'); // Debugging line

  const slides = document.querySelectorAll('.slide-image');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentSlide = 0;

  // Function to show the current slide
  function showSlide(index) {
    console.log('Showing slide:', index); // Debugging line
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  // Next Slide
  nextButton.addEventListener('click', () => {
    console.log('Next button clicked'); // Debugging line
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Previous Slide
  prevButton.addEventListener('click', () => {
    console.log('Previous button clicked'); // Debugging line
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Automatically switch slides every 5 seconds (optional)
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
});



document.addEventListener('DOMContentLoaded', function () {
  const stepButtons = document.querySelectorAll('.step-button');
  const stepContents = document.querySelectorAll('.step-content');
  const nextStepButton = document.querySelector('.next-step-button');
  let currentStep = 1;

  // Function to show the current step content
  function showStep(step) {
    // Remove active class from all buttons and contents
    stepButtons.forEach(btn => btn.classList.remove('active'));
    stepContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked button and corresponding content
    const activeButton = document.querySelector(`.step-button[data-step="${step}"]`);
    const activeContent = document.querySelector(`.step-content[data-step="${step}"]`);

    if (activeButton && activeContent) {
      activeButton.classList.add('active');
      activeContent.classList.add('active');
    }
  }

  // Initialize the first step
  showStep(currentStep);

  // Step button click event
  stepButtons.forEach(button => {
    button.addEventListener('click', function () {
      const step = this.getAttribute('data-step');
      currentStep = parseInt(step, 10);
      showStep(currentStep);
    });
  });

  // Next Step button click event
  nextStepButton.addEventListener('click', function () {
    if (currentStep < stepButtons.length) {
      currentStep++;
      showStep(currentStep);
    } else {
      // If it's the last step, loop back to the first step (optional)
      currentStep = 1;
      showStep(currentStep);
    }
  });
});



 // Mobile version

 document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // MOBILE MENU TOGGLE
  // ======================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu-wrapper');
  const closeButton = document.querySelector('.close-button');
  const body = document.body;
  
  function toggleMenu() {
    // Toggle hamburger animation
    hamburger.classList.toggle('is-active');
    
    // Toggle mobile menu visibility
    mobileMenu.classList.toggle('active');
    
    // Toggle body scroll
    if (mobileMenu.classList.contains('active')) {
      body.style.overflow = 'hidden';
      // Reset scroll position when opening
      document.querySelector('.mobile-menu-content').scrollTop = 0;
    } else {
      body.style.overflow = '';
    }
  }
  
  // Hamburger click event
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }
  
  // Close button click event
  if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking outside content
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      toggleMenu();
    }
  });
  
  // ======================
  // DROPDOWN TOGGLES
  // ======================
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      
      // Close all other dropdowns first
      document.querySelectorAll('.menu-item-has-children').forEach(item => {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      parent.classList.toggle('active');
      
      // If opening, initialize the product slider
      if (parent.classList.contains('active') && parent.querySelector('.mobile-products-container')) {
        initProductSlider(parent);
      }
    });
  });
  
  // ======================
  // PRODUCT SLIDER
  // ======================
  function initProductSlider(container) {
    const slides = container.querySelectorAll('.mobile-product-slide');
    const prevBtn = container.querySelector('.prev-product');
    const nextBtn = container.querySelector('.next-product');
    let currentSlide = 0;
    
    // Show first slide initially
    function showInitialSlide() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === 0) {
          slide.classList.add('active');
        }
      });
    }
    
    // Show specific slide
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
    
    // Navigation functions
    function goToPrev() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    function goToNext() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // Initialize
    showInitialSlide();
    
    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        goToPrev();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        goToNext();
      });
    }
    
    // Touch events for swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.querySelector('.mobile-products-container').addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    container.querySelector('.mobile-products-container').addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
      const difference = touchStartX - touchEndX;
      if (difference > 50) {
        // Swipe left
        goToNext();
      } else if (difference < -50) {
        // Swipe right
        goToPrev();
      }
    }
  }
  
  // ======================
  // WINDOW RESIZE HANDLER
  // ======================
  function handleResize() {
    // Close mobile menu if window is resized to desktop breakpoint
    if (window.innerWidth > 1199) {
      hamburger.classList.remove('is-active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
    }
  }
  
  window.addEventListener('resize', handleResize);
  
  // ======================
  // ESCAPE KEY HANDLER
  // ======================
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown');
  let isClickOpened = false; // Track if opened by click

  // Open on click
  dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      isClickOpened = true;
      dropdownMenu.style.display = 'block';
  });

  // Close when mouse leaves dropdown (only if opened by click)
  dropdownMenu.addEventListener('mouseleave', function() {
      if (isClickOpened) {
          dropdownMenu.style.display = 'none';
          isClickOpened = false;
      }
  });

  // Close when clicking outside
  document.addEventListener('click', function(e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.style.display = 'none';
          isClickOpened = false;
      }
  });

  // Prevent hover from opening (desktop only)
  if (window.innerWidth >= 1200) {
      dropdownToggle.addEventListener('mouseenter', function(e) {
          if (!isClickOpened) {
              dropdownMenu.style.display = 'none';
          }
      });
  }
});


