// Preloader function
$(window).on("load", function () {
    $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
});


$(document).ready(function () {

    // Burger click event
    $(".burger").click(function () {
        $(this).toggleClass("open");
        $(".navbar").fadeToggle(); //Show Navbar
    });

    // Scroll down function 
    $('#scroll-down').on('click', function() {
      $('html, body').animate({
          scrollTop: $(window).height()
      }, 1000); 
    });

    // Play button click event
    $('#intro-play').on('click', function() {
      // Fade out the overlay and play the video
      $('.intro-overlay').fadeOut(500, function() {
          $('#intro-video').get(0).play(); // Start playing the video
          $('#intro-video').attr('controls', 'controls'); // Add video controls

          // Enable scroll tracking after video starts playing
          $(window).on('scroll', checkIntroVisibility);
      });
    });

    // Function to check if the intro section is in view
    function checkIntroVisibility() {
      const windowHeight = $(window).height();
      const introOffsetTop = $('#intro-section').offset().top;
      const introHeight = $('#intro-section').outerHeight();
      const scrollTop = $(window).scrollTop();
      const video = $('#intro-video').get(0);

      // If the intro section is not visible (scrolled out of view)
      if (scrollTop + windowHeight <= introOffsetTop || scrollTop >= introOffsetTop + introHeight) {
          if (!$('.intro-overlay').is(':visible')) {
              $('.intro-overlay').fadeIn(500); // Show the overlay
              video.pause(); // Pause the video when overlay appears
              $('#intro-video').removeAttr('controls'); // Remove video controls when paused
              
              // Reset video to the start and show the poster
              video.currentTime = 0; // Reset video time to 0
              video.load(); // Reload the video to display the poster
          }
      } else {
          // Only hide overlay if video is NOT paused
          if (!video.paused && $('.intro-overlay').is(':visible')) {
              $('.intro-overlay').fadeOut(500); // Hide the overlay
          }
      }
    }


    // Smooth scroll when clicking on links
    $(".nav-link").click(function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Remove 'active' class from all links and add it to the clicked link
      $(".nav-link").removeClass("active");
      $(this).addClass("active");

      // Smooth scroll to the corresponding section
      let elementClick = $(this).attr("href");
      let destination = $(elementClick).offset().top - 100; // Offset for proper display
      $("html, body").animate({ scrollTop: destination }, 1000);

      // If menu is open on mobile, close it after scrolling
      if ($(".burger").hasClass("open")) {
        setTimeout(() => {
          $(".burger").removeClass("open");
          $(".navbar").fadeOut(); // Close menu after animation completes
        }, 1500); // Delay the closing of the menu by 1.5 seconds
      }
    });

    // Track scrolling to change the active link based on the visible section
    $(window).on("scroll", function () {
      let scrollDistance = $(window).scrollTop();

      // Loop through all sections on the page
      $(".section").each(function (i) {
        if ($(this).position().top <= scrollDistance + 110) {
          // Remove 'active' class from all links
          $(".nav-link").removeClass("active");
          // Add 'active' class to the link corresponding to the current section
          $(".nav-link").eq(i).addClass("active");
        }
      });
    });

    //Back to top button function
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $(".to-top-btn").fadeIn(250);
        } else {
          $(".to-top-btn").fadeOut(250);
        }
    });

    $(".to-top-btn").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 400);
    });
    
  });
  
  // Nav filter function
  $(document).scroll(function () {
    $(document).scrollTop() > $(".navigation-container").height() + 50
    ? $(".nav-filter").addClass("active-nav")
    : $(".nav-filter").removeClass("active-nav");
  });

