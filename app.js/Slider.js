var swiper = new Swiper(".slider-two-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
  },

    breakpoints:{
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // ==================================== //

