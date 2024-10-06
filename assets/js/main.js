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

    
  });
  
  // Nav filter function
  $(document).scroll(function () {
    $(document).scrollTop() > $(".header-bar").height() + 50
    ? $(".nav-filter").addClass("blured-nav")
    : $(".nav-filter").removeClass("blured-nav");
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