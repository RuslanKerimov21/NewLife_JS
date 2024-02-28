export function menu() {
    const mobileMenu = document.querySelector('.mobile-menu')
    const triger = document.querySelectorAll('.mobile-control')
    if (mobileMenu) {
        triger.forEach((el) => {
            el.addEventListener("click", hanleMenu(mobileMenu));
        })
    }
    function hanleMenu(elem) {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active')
        }
        else {
            elem.classList.add('active');
        }
    }
}