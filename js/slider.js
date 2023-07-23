$(function () {
  $(".lineup-carousel-news").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    // prevArrow: $(".slick-prev"),
    // nextArrow: $(".slick-next"),

    prevArrow: $(".prev-arrow-news"),
    nextArrow: $(".next-arrow-news"),

    responsive: [
      {
        breakpoint: 1024, //ブレイクポイントを指定
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, //ブレイクポイントを指定
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".lineup-carousel-study").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    // prevArrow: $(".slick-prev"),
    // nextArrow: $(".slick-next"),

    prevArrow: $(".prev-arrow-study"),
    nextArrow: $(".next-arrow-study"),

    responsive: [
      {
        breakpoint: 1024, //ブレイクポイントを指定
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, //ブレイクポイントを指定
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
