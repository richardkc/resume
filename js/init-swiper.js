!function () {
  var view = document.querySelector('#mySlides')
  var controller = {
      view: null,
      swiper: null,
      init: function(view){
          this.view = view
          this.initSwiper()
          this.buttonsClick()
      },
      initSwiper: function(){
          this.swiper = new Swiper(
              this.view.querySelector('.swiper-container'),
              this.swiperOptions)
      },
      swiperOptions: {
          // Optional parameters
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
      },
    buttonsClick: function () {
      var $sliderbutton = $('#mySlides>#sliderButton')
      for (let i = 0; i < $sliderbutton.length; i++) {
        $($sliderbutton[i]).on('click', (e) => {
          $($sliderbutton[i]).addClass('active')
          setTimeout(() => {
            $($sliderbutton[i]).removeClass('active')
          }, 300)
        })
      }
    }
  }

  controller.init(view)

}.call()