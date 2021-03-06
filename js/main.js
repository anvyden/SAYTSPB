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
  // var newsNext = $('.news-swiper-button-next');
  // var newsPrev = $('.news-swiper-button-prev');
  // var newsPositionPrev = newsPrev.position();
  // newsNext.css('left', newsPositionPrev.left + newsPrev.width() + 22.5)
  

  // Плавная прокрутка при клике на ссылки меню
  $('.nav__item, .logo__text, .footer__logo-link, .footer__company-link').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        idTop = $(id).offset().top;
      $('body, html').animate({scrollTop: idTop}, 1300);
  });
  $(".nav__item").on('click', function(e){
    if (mobileResponsive.matches) {
      var fixed_offset = 30;
      $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1300);
      e.preventDefault();
    }
  });
  // $(window).resize(function () {
  //   if ($(window).width() <= 992) {
  //     var fixed_offset = 30;
  //     $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1300);
  //     e.preventDefault();
  //   }
  // });

  // Модальное окно
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]')
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      modal.on('click', function (event) {
        if ($(event.target).is('modal__dialog'))
        event.stopPropagation();
        else if ($(event.target).is('.modal'))
        modal.toggleClass('modal--visible'),
        modalForm.resetForm(),
        $('.modal__form')[0].reset();
      });
      $(document).on('keydown', function(event) {
        if (event.keyCode === 27 && $('.modal').hasClass('modal--visible'))
        modal.toggleClass('modal--visible'),
        modalForm.resetForm(),
        $('.modal__form')[0].reset();
      });

  // Окно благодарности
  thanks = $('.thanks')
  // closeBtnThanks = $('.thanks__close')
  thanks.on('click', function (event) {
    if ($(event.target).is('thanks__dialog'))
    event.stopPropagation();
    else if ($(event.target).is('.thanks'))
    thanks.removeClass('thanks--visible');
  });
  $(document).on('keydown', function(event) {
    if (event.keyCode === 27 && $('.thanks').hasClass('thanks--visible'))
    thanks.removeClass('thanks--visible');
  });

  // Валидация формы (price)
  $('.price__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userEmail: {
        required: true,
        email: true
      },
      userAdress: {
        required: true,
        url: true
      },
      userQuestion: {
        required: true
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче двух букв"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите в формате: name@domain.com"
      },
      userAdress: {
        required: "Заполните поле",
        url: "Введите в формате: https://www.name.com"
      },
      userQuestion: {
        required: "Заполните поле"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $('.thanks').addClass('thanks--visible');
          $(form)[0].reset();
          if ($('.thanks').hasClass('thanks--visible')) {
            modal.removeClass('modal--visible');
          }
          ym(61607104,'reachGoal','submitForm'); return true;
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    },
  });


  // Валидация формы (contacts)
  $('.contacts-block__form').validate({
    errorClass: "contacts-block__invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userEmail: {
        required: true,
        email: true
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: {
        required: true
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче двух букв"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите в формате: name@domain.com"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер не может быть короче 11 цифр"
      },
      userQuestion: {
        required: "Заполните поле"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $('.thanks').addClass('thanks--visible');
          $(form)[0].reset();
          if ($('.thanks').hasClass('thanks--visible')) {
            modal.removeClass('modal--visible');
          }
          ym(61607104,'reachGoal','submitForm'); return true;
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    },
  });

  //Валидация формы (modal)
  var modalForm = $('.modal__form').validate({
    errorClass: "modal__invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче двух букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер не может быть короче 11 цифр"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $('.thanks').addClass('thanks--visible');
          $(form)[0].reset();
          if ($('.thanks').hasClass('thanks--visible')) {
            modal.removeClass('modal--visible');
          }
          ym(61607104,'reachGoal','callBack'); return true;
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    },
  });
  
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  // Прокручивание слайдера на мобильной версии с помощью свайпа
  var mql = window.matchMedia('all and (max-width: 570px)');
    if (mql.matches) {
      $('.swiper-wrapper').each(function () {
        $(this).removeClass('swiper-no-swiping');
        });
    } else {
      $('.swiper-wrapper').each(function () {
      $(this).addClass('swiper-no-swiping');
      });
    }
  // закрытие бургер-меню при клике по ссылке
  var mobileResponsive = window.matchMedia('all and (max-width: 992px)');
  if (mobileResponsive.matches) {
    $('.nav__item').on('click', function (e) {
    $('#check-menu').prop('checked', false);
    });
  }
  $(window).resize(function () {
    if ($(window).width() <= 992) {
      $('.nav__item').on('click', function (e) {
      $('#check-menu').prop('checked', false);
      });
    }
  });
});