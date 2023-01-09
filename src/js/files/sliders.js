/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Lazy, Navigation, Zoom } from "swiper";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";

// Ініціалізація слайдерів
function initSliders() {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      modules: [Navigation, Lazy, Zoom],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoHeight: true,
      grabCursor: true,
      zoom: true,
      lazy: true,
      on: {},
    });
  }
}

window.addEventListener("load", function (e) {
  initSliders();
});
