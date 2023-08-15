var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});