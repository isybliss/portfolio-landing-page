var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullet: 'true',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {   
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullet: 'true',

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<2;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<2;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}