/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });


});
        setTimeout(function () {
          document.querySelector('.loading-screen').style.display = 'none';
      }, 1000); 
      document.addEventListener("DOMContentLoaded", function () {
        const section = document.querySelector(".service-content");
        const serviceItems = document.querySelectorAll(".service-item");
    
        // Function to check if an element is in the viewport
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        // Function to add the 'show' class to elements in the viewport
        function animateElements() {
            serviceItems.forEach((item) => {
                if (isElementInViewport(item)) {
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                }
            });
        }
    
        // Initial animation check
        animateElements();
    
        // Add an event listener to check for animation on scroll
        window.addEventListener("scroll", animateElements);
    });
// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to start the fire animation when the element is in the viewport
function startFireAnimation() {
    const fireIcon = document.querySelector('.fa-fire');
    if (isElementInViewport(fireIcon)) {
        fireIcon.classList.add('fire-animation');
    } else {
        fireIcon.classList.remove('fire-animation');
    }
}

// Attach an event listener to check for scrolling
window.addEventListener('scroll', startFireAnimation);

// Initial check when the page loads
window.addEventListener('load', startFireAnimation);

