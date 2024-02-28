window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".offer-left");
    if (slider) {
        let swiper = new Swiper('.offer-right', {
            slidesPerView: 1,
        })
        new Swiper('.offer-left', {
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }
    const btn = document.querySelectorAll(".mobile-control");
    const mobileMenu = document.querySelector(".mobile-menu");
    btn.forEach((el) => {
        el.addEventListener("click", () => {
            if (mobileMenu.classList.contains("active")) {
                mobileMenu.classList.remove("active");
            }
            else {
                mobileMenu.classList.add("active")
            }
        })
    })
});