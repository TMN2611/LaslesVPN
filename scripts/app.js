$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: false,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><img src='./images/icon-prev.svg'/></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><img src='./images/icon-next.svg'/></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: false,
      },
    },
  ],
});

(() => {
  const isShow = 'isShow';
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();

    menu.classList.add(isShow);
  });
  window.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) {
      console.log(menu.contains(e.target));
      menu.classList.remove(isShow);
    }
  });
})();
