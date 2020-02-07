var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        540: {
          slidesPerView: 2
        }
      }

});

var menubutton = document.querySelector('.menu-button');
var menu = document.querySelector ('.header'); 

menubutton.addEventListener('click', function () {
menubutton.classList.toggle('menu-button-active');
menu.classList.toggle('header-active');
})