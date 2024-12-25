(function ($) {
  "use strict";

  // Nivo slider js
  $(window).on('load', function () {
    
    $('#slider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: '',
        nextText: '',
        randomStart: false,
        afterLoad: function() {
            $('#loader').hide();
        }
    });
});

  // Event slider js
  $(".event_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    arrows: false,
    dots: false,
    fade:true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // News slider js
  $(".news_slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 3000,
    arrows: false,
    vertical: true,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // date js
  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  function displayDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    document.querySelector('#date').textContent = formattedDate;
  }

  displayDate();


  // Time js
  function startTime(elementId) {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    // Determine AM or PM
    const ampm = h >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    h = h % 12 || 12;

    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = h + ":" + m + ":" + s + " " + ampm;
    }

    setTimeout(function () {
      startTime(elementId);
    }, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  startTime('time');
  startTime('mobile_time');


  // News ticker js
  $(function () {
    var marquee = $('.marquee');
    var ul = $('.marquee ul');
  
    // Clone content function
    var cloneContent = function () {
      var doClone = true;
      var clone_ul = function () {
        ul.find('li').clone().appendTo(ul);
      };
      var check_ul_width = function () {
        if (marquee.width() > ul.width()) {
          clone_ul();
          return;
        }
        doClone = false;
        ul.css('visibility', 'visible');
      };
  
      do {
        check_ul_width();
      } while (doClone);
    };
  
    cloneContent();
  
    // Initialize the marquee
    var marqueeAnimation = $('.marquee').marquee({
      duration: 15000,
      duplicated: true,
      startVisible: true
    });
  
    // Stop marquee on hover and resume on mouse leave
    $('.marquee').on('mouseenter', function () {
      marqueeAnimation.marquee('pause');
    });
  
    $('.marquee').on('mouseleave', function () {
      marqueeAnimation.marquee('resume');
    });
  });

  // lightbox js
 
  
  
  

  // // Fixed menu js start
  // $(window).on("scroll", function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll < 245) {
  //     $("#sticky-header").removeClass("sticky-menu");
  //     $("#header-fixed-height").removeClass("active-height");
  //   } else {
  //     $("#sticky-header").addClass("sticky-menu");
  //     $("#header-fixed-height").addClass("active-height");
  //   }
  // });

  // $(document).ready(function () {
  //   // Check if the modal has already been shown
  //   if (!sessionStorage.getItem('modalShown')) {
  //     // Show the modal
  //     $('#exampleModal').modal('show');
  //     // Set session storage to prevent showing again
  //     sessionStorage.setItem('modalShown', 'true');
  //   }
  // });

  // // gallery js
  // const items = document.querySelectorAll('.main .video_item');
  // items.forEach((item, index) => {
  //   if ((index + 1) % 6 === 5) {
  //     item.classList.add('moved-up');
  //   }
  // });


  // // testimonial slider js
  // $(".team_slider").slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   speed: 600,
  //   arrows: false,
  //   dots: true,
  //   responsive: [{
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   }]
  // });

  // // Blog slider js
  // $(".blog_slider").slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   speed: 600,
  //   arrows: false,
  //   dots: false,
  //   responsive: [{
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   }]
  // });

  // $('.blog_slider_prev').on('click', function () {
  //   $('.blog_slider').slick('slickPrev');
  // });

  // $('.blog_slider_next').on('click', function () {
  //   $('.blog_slider').slick('slickNext');
  // });

  // // Split text animation
  // document.addEventListener("DOMContentLoaded", function () {
  //   // Initialize Isotope only once
  //   const $projectsContainer = $(".projects_container").isotope({
  //     itemSelector: ".col-lg-6",
  //     layoutMode: "fitRows"
  //   });

  //   // Filter items on button click
  //   $(".projects_menus").on("click", "button", function (event) {
  //     event.preventDefault();
  //     const filterValue = $(this).attr("data-filter");

  //     // Filter items using Isotope
  //     $projectsContainer.isotope({ filter: filterValue });

  //     // Update active class on buttons
  //     $(this).siblings(".active").removeClass("active");
  //     $(this).addClass("active");

  //     // Re-initialize SplitText animations after filtering
  //     $projectsContainer.one("arrangeComplete", function () {
  //       initSplitTextAnimations();
  //     });
  //   });

  //   // Initialize SplitText animations for the first time
  //   if ($(".split-text").length > 0) {
  //     initSplitTextAnimations();
  //   }

  //   // Function to initialize SplitText animations
  //   function initSplitTextAnimations() {
  //     $(".split-text").each(function (index, el) {
  //       // Skip re-initialization for project-section-title if it has already run
  //       if ($(el).hasClass("project-section-title") && el.hasRun) {
  //         return; // Skip this element
  //       }

  //       // Reset previous SplitText instance if it exists
  //       if (el.split) el.split.revert();

  //       // Create a new SplitText instance
  //       el.split = new SplitText(el, {
  //         type: "lines,words,chars",
  //         linesClass: "tp-split-line"
  //       });

  //       gsap.set(el, {
  //         perspective: 400
  //       });

  //       // Apply initial animation settings based on the class
  //       const animationProps = {
  //         opacity: 0,
  //         ease: "circ.out"
  //       };

  //       if ($(el).hasClass("right")) {
  //         animationProps.x = "50";
  //       } else if ($(el).hasClass("left")) {
  //         animationProps.x = "-50";
  //       } else if ($(el).hasClass("up")) {
  //         animationProps.y = "80";
  //       } else if ($(el).hasClass("down")) {
  //         animationProps.y = "-80";
  //       }

  //       gsap.set(el.split.chars, animationProps);

  //       // Use ScrollTrigger for animation
  //       el.anim = gsap.to(el.split.chars, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 90%",
  //           toggleActions: "play none none reverse",
  //           onEnter: () => {
  //             // Mark the project section title as having run
  //             if ($(el).hasClass("project-section-title")) {
  //               el.hasRun = true; // Set a custom property to indicate it has run
  //             }
  //           }
  //         },
  //         x: "0",
  //         y: "0",
  //         rotateX: "0",
  //         scale: 1,
  //         opacity: 1,
  //         duration: 0.4,
  //         stagger: 0.02
  //       });
  //     });
  //   }
  // });


  // // Image reveal js
  // document.addEventListener('DOMContentLoaded', function () {
  //   let revealContainers = document.querySelectorAll(".reveal_image");
  //   revealContainers.forEach((container) => {
  //     let image = container.querySelector("img");
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         toggleActions: "play none none reverse",
  //       }
  //     });

  //     tl.set(container, {
  //       autoAlpha: 1
  //     });

  //     if (container.classList.contains('zoom-out')) {
  //       // Zoom-out effect
  //       tl.from(image, 1.5, {
  //         scale: 1.4,
  //         ease: Power2.out
  //       });
  //     } else if (container.classList.contains('left') || container.classList.contains('right')) {
  //       let xPercent = container.classList.contains('left') ? -100 : 100;
  //       tl.from(container, 1.5, {
  //         xPercent,
  //         ease: Power2.out
  //       });
  //       tl.from(image, 1.5, {
  //         xPercent: -xPercent,
  //         scale: 1,
  //         delay: -1.5,
  //         ease: Power2.out
  //       });
  //     }
  //   });
  // });

  // // magnific popup js
  // $(".parent-container").magnificPopup({
  //   delegate: "a",
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });

  // // magnific video js
  // $(".vidplay").magnificPopup({
  //   type: "iframe",
  //   iframe: {
  //     markup: '<div class="mfp-iframe-scaler">' +
  //       '<div class="mfp-close"></div>' +
  //       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //       "</div>",
  //     patterns: {
  //       youtube: {
  //         index: "youtube.com/",
  //         id: "v=",
  //         src: "https://www.youtube.com/embed/%id%?autoplay=1",
  //       },
  //     },
  //     srcAction: "iframe_src",
  //   },
  // });

  // /* Odometer Active js */
  // $(".odometer").appear(function (e) {
  //   var odo = $(".odometer");
  //   odo.each(function () {
  //     var countNumber = $(this).attr("data-count");
  //     $(this).html(countNumber);
  //   });
  // });

  // // back to top js
  // var btn = $(".scroll-to-top");

  // $(window).scroll(function () {
  //   btn.toggleClass("show", $(window).scrollTop() > 300);
  // });

  // btn.click(function (e) {
  //   e.preventDefault();
  //   if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  //     $("html").animate({
  //         scrollTop: 0,
  //       },
  //       1000
  //     );
  //   } else {
  //     $("html, body").animate({
  //         scrollTop: 0,
  //       },
  //       0
  //     );
  //   }
  // })

  // // mobilel menu js

  // $(".mobile-topbar .bars i").on("click", function () {
  //   $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  //   return false;
  // });

  // $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
  //   $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  // });

  // $(".sub-mobile-menu ul").hide();
  // $(".sub-mobile-menu a").on("click", function () {
  //   $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
  //   $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  // });
})(jQuery);