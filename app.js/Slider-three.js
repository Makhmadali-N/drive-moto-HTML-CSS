var swiper = new Swiper(".content-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2000,
  // },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  }
});

// ==================================== //

let accordions = document.querySelectorAll(".accordion-two");

for (item of accordions) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  })
};


// ======================================== //

// Событие на кнопку Footer //
document.querySelector(".footer-btn").onclick = function () {
  alert("Спасибо, С вами свяжутся!");
}

// ======================================== //


const mobileBtn = document.querySelector(".mobile-btn")
const blockOptions = document.querySelector(".block-options")


if (blockOptions && mobileBtn) { 
    mobileBtn.addEventListener("click", () => {
      blockOptions.classList.toggle("active")
      mobileBtn.classList.toggle("active")
    })
};
