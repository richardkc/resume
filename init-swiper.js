!function () {
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        init: function(view){
            this.view = view
            this.initSwiper()
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

    }


}.call()