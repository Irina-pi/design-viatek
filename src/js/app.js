import * as flsFunctions from "./modules/supportImg.js";
import $ from "jquery";
import Swiper, {Navigation} from "swiper";

flsFunctions.isWebp();

Swiper.use([Navigation]);

const swiper = new Swiper(".first-screen-slider-inner", {
  slidesPerView: 7,
  loop: true,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
});

const swiperExperience = new Swiper(".fourth-screen-slider-inner", {
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
});

$('.header-menu-item-services').click(function () {
  $('.dropdown').fadeToggle(200);
  $(this).toggleClass('active');
})

$('.header-phone-arrow').click(function () {
  $('.header-phone-wrapper-hide').slideToggle();
  $(this).toggleClass('active')
})
