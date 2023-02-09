/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

// ==========================================//

  // --- Burger --- //
const menuBtn = document.querySelector(".menu__btn")
const menu = document.querySelector(".menu")

const body = document.body;

if (menu && menuBtn) { 
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active")
        menuBtn.classList.toggle("active")
        body.classList.toggle("lock")
    })
};


// ========================================//

// --- Accordions --- //
let accordions = document.querySelectorAll(".accordion-item");

for(item of accordions) {
    item.addEventListener("click", function(){
        this.classList.toggle("active");
    })
};

// ========================================//
// Событие на кнопку Footer //
document.querySelector(".footer-btn").onclick = function () {
    alert("Спасибо, С вами свяжутся!");
}