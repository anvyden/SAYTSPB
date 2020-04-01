$(document).ready(function () {
  var casesSwiper = new Swiper ('.cases-swiper', {
    loop: true,
    navigation: {
      nextEl: '.cases-swiper-button-next',
      prevEl: '.cases-swiper-button-prev',
    },
  })
  var commentsSwiper = new Swiper ('.comments-swiper', {
    loop: true,
    navigation: {
      nextEl: '.comments-swiper-button-next',
      prevEl: '.comments-swiper-button-prev',
    },
  })
  var newsSwiper = new Swiper ('.news-swiper', {
    loop: true,
    navigation: {
      nextEl: '.news-swiper-button-next',
      prevEl: '.news-swiper-button-prev',
    },
  })
  var newsNext = $('.news-swiper-button-next');
  var newsPrev = $('.news-swiper-button-prev');
  var newsPositionPrev = newsPrev.position();
  newsNext.css('left', newsPositionPrev.left + newsPrev.width() + 22.5)
});