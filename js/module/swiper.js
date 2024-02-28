export default function slider(slider, gallerey) {
    if (slider) {
        console.log(slider)
        let swiper = new Swiper(gallerey, {
            slidesPerView: 1,
        })
        new Swiper(slider, {
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
}