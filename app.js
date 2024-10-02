$('.slides-container').slick({
  
    prevArrow: '<button type="button" class="my-prev"></button>',
    nextArrow:'<button type="button" class="my-next"></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                arrows:false,
                autoplay:true
            }
        }
    ]
});

let burger = document.querySelector('.burger') 
let menu = document.querySelector(".menu")
burger.addEventListener('click', function() {
    menu.classList.toggle('open')
})

