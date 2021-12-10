// 初始化swiper 	<!-- Initialize Swiper -->

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



//   Initialize Swiper 

  var productSwiper = new Swiper("#product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        993:{
            slidesPerView: 3,
            spaceBetween: 30,   
        }
      },
  });