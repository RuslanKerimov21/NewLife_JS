export default function menu(control, content) {
    control.forEach((el) => {
        el.addEventListener("click", () => {
            if (content.classList.contains("active")) {
                content.classList.remove("active");
            }
            else {
                content.classList.add("active")
            }
        })
    })
}