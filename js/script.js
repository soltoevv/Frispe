// const swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     },
// });

// const swiper = new Swiper(".mySwiper", {
//     scrollbar: {
//         el: ".swiper-scrollbar",
//         hide: true,
//     },
// });

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let btn = document.querySelector(".header-general__btn")
btn.addEventListener("click", () => {
    document.querySelector(".header-general__mobal").style.display = "block"
})
let btnclose = document.querySelector(".header-general__mobal__block__square h1")
btnclose.addEventListener("click", () => {
    document.querySelector(".header-general__mobal").style.display = "none"
})