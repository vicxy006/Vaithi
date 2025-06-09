const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const formPop = document.querySelectorAll('.contact-form .form-input');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
} );
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());
navLinks.forEach(link =>{ link.addEventListener("click", ()=> menuOpenButton.click());

});
//for swiper
const swiper = new Swiper('.slider-wra', {
    loop: true,
    grabCursor:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    },
  });
   const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto Slide
  setInterval(() => {
    nextSlide();
  }, 4000); // Change slide every 4 seconds 