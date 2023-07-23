$(function () {
  $(".lineup-carousel-study").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    // prevArrow: $(".slick-prev"),
    // nextArrow: $(".slick-next"),

    prevArrow: $(".prev-arrow-study"),
    nextArrow: $(".next-arrow-study"),

    responsive: [
      {
        breakpoint: 960, //ブレイクポイントを指定
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, //ブレイクポイントを指定
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
