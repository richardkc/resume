"use strict";

!function () {
  var view = document.querySelector('#mySlides');
  var controller = {
    view: null,
    swiper: null,
    init: function init(view) {
      this.view = view;
      this.initSwiper();
      this.buttonsClick();
    },
    initSwiper: function initSwiper() {
      this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions);
    },
    swiperOptions: {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    buttonsClick: function buttonsClick() {
      var $sliderbutton = $('#mySlides>#sliderButton');

      var _loop = function _loop(i) {
        $($sliderbutton[i]).on('click', function (e) {
          $($sliderbutton[i]).addClass('active');
          setTimeout(function () {
            $($sliderbutton[i]).removeClass('active');
          }, 300);
        });
      };

      for (var i = 0; i < $sliderbutton.length; i++) {
        _loop(i);
      }
    }
  };
  controller.init(view);
}.call();