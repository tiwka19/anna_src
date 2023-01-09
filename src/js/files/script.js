// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import ScrollReveal from "scrollreveal";

const plans = document.querySelectorAll(".plans__item");
plans.forEach((plan) => {
  plan.addEventListener("mouseover", () => {
    document.querySelector("._default").classList.remove("_active");
    plan.classList.add("_active");
  });
  plan.addEventListener("mouseleave", () => {
    plan.classList.remove("_active");
    document.querySelector("._default").classList.add("_active");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1000,
  delay: 50,
});

sr.reveal(`.hero__data`, { duration: 1500 });
sr.reveal(".hero__image", { origin: "bottom", duration: 1500 });
sr.reveal(`.about__title, .classes__data, .benefits__data, .education__title`, { origin: "left" });
sr.reveal(`.about__item, .classes__text, .benefits__item, .education__data-item`, { origin: "right", interval: 100 });
sr.reveal(`.plans, .progress, .callback`, { origin: "bottom" });
sr.reveal(".plans__item", { origin: "bottom" });
