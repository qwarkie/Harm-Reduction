// Preloader function
$(window).on("load", function () {
  $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
});


$('#intro-play').fadeIn(1800);


function getIntroPoster() {
  let posterPath = $('#intro-video').attr('poster');
  
  $('.video-thumb-mirror').css('background-image', `url(${posterPath})`);
}

$(document).ready(function () {

  getIntroPoster()


    // Burger click event
    $(".burger").click(function () {
        $(this).toggleClass("open");
        $(".navbar").fadeToggle(); //Show Navbar
    });

    // Scroll down function 
    $('#scroll-down').on('click', function() {
      $('html, body').animate({
          scrollTop: $(window).height() - 40
      }, 1000); 
    });

    function startIntro(){
        // Fade out the overlay and play the video
        $('.intro-overlay').fadeOut(500, function() {
          $('#intro-video').get(0).play(); // Start playing the video
          $('#intro-video').attr('controls', 'controls'); // Add video controls
          $('.video-thumb-mirror').fadeOut()
          // Enable scroll tracking after video starts playing
          $(window).on('scroll', checkIntroVisibility);
      });
    }

    // Play button click event
    $('#intro-play').on('click', function() {
      startIntro()
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
              $('.video-thumb-mirror').fadeIn()
          }
      } else {
          // Only hide overlay if video is NOT paused
          if (!video.paused && $('.intro-overlay').is(':visible')) {
              $('.intro-overlay').fadeOut(500); // Hide the overlay
          }
      }
    }

    // Smooth scroll when clicking on links
    $(".anchor-scroll").click(function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Remove 'active' class from all links and add it to the clicked link
      $(".anchor-scroll").removeClass("active");
      $(this).addClass("active");

      // Smooth scroll to the corresponding section
      let elementClick = $(this).attr("href");
      let destination = $(elementClick).offset().top - 100; // Offset for proper display
      $("html, body").animate({ scrollTop: destination }, 1000);

      // Close mobile menu if open
      if ($(".burger").hasClass("open")) {
        setTimeout(() => {
          $(".burger").removeClass("open");
          $(".navbar").fadeOut(); // Close menu after animation completes
        }, 1000); // Delay the closing of the menu by 1 second
      }
    });

    // Track scrolling to change the active link based on the visible section
    $(window).on("scroll", function () {
      let scrollDistance = $(window).scrollTop();
      
      // Loop through all sections on the page
      $(".active-trigger").each(function (i) {
        let sectionTop = $(this).offset().top - 100; // Top of the section
        let sectionBottom = sectionTop + $(this).outerHeight(); // Bottom of the section

        // Check if current scroll position is within the section or at the footer
        if (scrollDistance >= sectionTop - 100 && scrollDistance < sectionBottom) {
          // Remove 'active' class from all links
          $(".anchor-scroll").removeClass("active");
          // Add 'active' class to the link corresponding to the current section
          $(".anchor-scroll").eq(i).addClass("active");
        }
      });
        // Special case for footer
      let resourcesTop = $("#resources").offset().top; // Top of the footer
      if (scrollDistance >= resourcesTop) {
        $(".anchor-scroll").removeClass("active");
        $('a[href="#resources"]').addClass("active"); // Assuming the last link is for footer
      }
    });

    //Back to top button function
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $(".to-top-btn").fadeIn(250);
        } else {
          $(".to-top-btn").fadeOut(250);
        }
    });

    $('.watch-intro').on('click', function () {
      const scrollDuration = 2000; // Scroll duration in milliseconds
    
      // Animate scroll to the top of the page
      $('html, body').animate({ scrollTop: 0 }, scrollDuration);
    
      // Call startIntro() after the scroll finishes
      setTimeout(function () {
        startIntro();
      }, scrollDuration);
    });

    $(".to-top-btn").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    $(".contact-trigger").click(function () {

      $(".email-link").css('box-shadow', '0px 0px 15px 2px #52c2c8')
      setTimeout(function () {
        $(".email-link").css('box-shadow', '')
      }, 2500);
      
    });


    // Copy mail function
    $('.copy-mail').on('click', function () {
      const emailText = $('.email-link').text();

      navigator.clipboard.writeText(emailText).then(() => {
        $('.copy-success')
          .fadeIn(300)  
          .delay(500) 
          .fadeOut(300); 
      });
    });

    const currentYear = new Date().getFullYear(); 
    $('.copyright-year').text(currentYear); 
    
  });
  
  // Nav filter function
  $(document).scroll(function () {
    $(document).scrollTop() > $(".navigation-container").height() + 50
    ? $(".nav-filter").addClass("active-nav")
    : $(".nav-filter").removeClass("active-nav");
  });

