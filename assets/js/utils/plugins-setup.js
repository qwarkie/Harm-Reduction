
//Animate on scroll Initialization
AOS.init();

$(document).ready(function () {

    // Swiper Slider Settings 
    const swiper = new Swiper('.stories-slider', {
        // Pagination with dynamic bullets and clickable functionality
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        
        // Navigation arrows for next and previous
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // Loop to enable infinite scrolling
        loop: true,
      
        // Coverflow effect
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      
        // Autoplay configuration
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    
        speed: 1000,
      
        // Responsive breakpoints for different screen sizes
        breakpoints: {
          // When window width is >= 320px (mobile)
          320: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
          // When window width is >= 768px (tablet and above)
          768: {
            slidesPerView: 3, // Show 3 slides on tablets and larger screens
          }
        }
      });



});