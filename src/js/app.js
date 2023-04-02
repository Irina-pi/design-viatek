import * as flsFunctions from "./modules/supportImg.js";
import $ from "jquery";
import Swiper, {Navigation, EffectFade} from "swiper";

flsFunctions.isWebp();

Swiper.use([Navigation, EffectFade]);

const swiperTechnology = new Swiper(".first-screen-slider-inner", {

  loop: true,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints:{
    567: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    }
  }
});

const swiperExperience = new Swiper(".fourth-screen-slider-inner", {
  loop: true,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints:{
    567: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});

const swiperVacancy = new Swiper(".vacancy-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-vacancy-arrow-next",
    prevEl: ".swiper-vacancy-arrow-prev",
  },
  breakpoints:{
    567: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

const swiperPrefooterBitrix = new Swiper(".bitrix-gallery", {
  loop: true,
  navigation: false,

  autoplay: {
    delay: 5000,
  },
  breakpoints:{
    567: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween:5,
      slidesPerView: 2,
    },
    992: {
      spaceBetween:10,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween:20,
      slidesPerView: 4,
    }
  }
});

const casesGallery = new Swiper('.page-cases-gallery',{
  loop: true,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
  breakpoints:{
    567: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween:5,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween:10,
      slidesPerView: 3,
    }
  }
});

const servicesSlider = new Swiper('.services-slider',{
  loop: false,
  slidesPerView: 1,
  loopedSlides: 3,
  speed: 500,
  longSwipesMs:1000,
  initialSlide: 1,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
})

const servicesDescription = new Swiper('.services-description', {
  loop: false,
  slidesPerView: 1,
  speed: 1000,
  effect:'fade',
  fadeEffect: {
    crossFade: true
  },
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
})

const sliderCost = new Swiper ('.page-costs-block',{
  loop: true,
  breakpoints:{
    567: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween:5,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween:10,
      slidesPerView: 4,
    }
  }
})

$('.header-menu-item-services').click(function () {
  $('.dropdown').fadeToggle(200);
  $(this).toggleClass('active');
})

$('.header-phone-arrow').click(function () {
  $('.header-phone-wrapper-hide').slideToggle();
  $(this).toggleClass('active');
})

$('.feedback-arrow').click(function (){
    $('.feedback-form').slideToggle();
    $(this).toggleClass('active');
})