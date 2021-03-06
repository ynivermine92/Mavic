//slider///
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
//slider///

///acardion////
const input = document.querySelectorAll('.acardion-item__triger');

input.forEach((item) => {
  item.addEventListener('click', () => {
   item.classList.toggle('active');
  })
})
///acardion////

/* scroll */
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
  sectionSelector: '.section',
  menu: '#header__nav',
  anchors:['top', 'products', 'leadership','characteristics','advantage'],
});


//methods
fullpage_api.setAllowScrolling(true);


