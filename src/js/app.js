import * as flsFunctions from "./modules/supportImg.js";

flsFunctions.isWebp();

import Swiper, { Navigation } from "swiper";
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
