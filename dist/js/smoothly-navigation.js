"use strict";

!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll('ul > li > a');

      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault(); //消除原标签的默认动作，这里用来消除原来的锚点#指向相同id

          var a = x.currentTarget;
          var href = a.getAttribute('href'); //带#号，获取用户在标签上写的原文，而不是浏览器编译过的带http协议的地址

          var element = document.querySelector(href); //与querySelectorAll不同的是只返回一个元素，不是一个数组      

          _this.scrollToElement(element);
        };
      }
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop; //获取一个元素距离浏览器窗口顶端的固定值（此值固定，要获取变动的值应使用element.getBoundingClientRect此API，具体操作mdn）

      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var s = Math.abs((targetTop - currentTop) * 2);

      if (s >= 1000) {
        s = 1000;
      }

      var coords = {
        y: currentTop
      };
      var tween = new TWEEN.Tween(coords).to({
        y: targetTop
      }, s).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start(); // let n = 100
      // let duration = 500 / n
      // let currentTop = window.scrollY
      // let targetTop = top - 80
      // let distance = (targetTop - currentTop)/ n
      // let i = 0
      // let id = setInterval(() => {
      //     if(i===n){
      //         window.clearInterval(id)
      //         return
      //     }
      //     i = i + 1
      //     window.scrollTo(0,currentTop + distance * i)          //窗口滑动到某个位置
      // }, duration);
    }
  };
  controller.init(view);
}.call();