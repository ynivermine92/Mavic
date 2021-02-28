
const swiper = new Swiper('.products__slider-wrapper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-left',
    prevEl: '.slider-right',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let blockTabs = document.querySelectorAll('.advantage__text');
  console.log(blockTabs);

 let tabs = () =>{
  for(let i = 0; i < blockTabs.length;i++){
      blockTabs[i].classList.toggle('active');
    }
 
  }

  
let btn = document.querySelectorAll('.advantage__btn').forEach((item) =>  
    item.addEventListener('click', tabs,)
);