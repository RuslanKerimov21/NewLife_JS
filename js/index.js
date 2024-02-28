import menu from "./module/menu.js";
import slider from "./module/swiper.js";
import { mobiileMenuControl, mobileMenu, sliderBlock } from "./constants/index.js";
window.addEventListener("DOMContentLoaded", () => {
    slider(sliderBlock, '.offer-right');
    menu(mobiileMenuControl, mobileMenu);
}); 