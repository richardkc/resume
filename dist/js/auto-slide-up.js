"use strict";

!function () {
  setTimeout(function () {
    findClosestAndRemoveOffset();
  }, 10);
  var $specialTags = $('[data-x]');

  for (var i = 0; i < $specialTags.length; i++) {
    $($specialTags[i]).addClass('offset');
  }

  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset();
  });
  /*  helper  */

  var liTags = document.querySelectorAll('nav.menu > ul > li'); //选择器，并返回其所选中的所有document

  for (var _i = 0; _i < liTags.length; _i++) {
    liTags[_i].onmouseenter = function (x) {
      //鼠标进入指定标签，mouseleave同理
      x.currentTarget.classList.add('active');
    };

    liTags[_i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    };
  }

  function findClosestAndRemoveOffset() {
    var $specialTags = $('[data-x]');
    var minIndex = 0;

    for (var _i2 = 0; _i2 < $specialTags.length; _i2++) {
      if (Math.abs($specialTags[_i2].offsetTop - window.scrollY) < Math.abs($specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i2;
      }
    } //$specialTags[minIndex]是离窗口最近的元素


    $($specialTags[minIndex]).removeClass('offset');
    var id = $specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentNode;
    var allNodes = li.parentNode.children;

    for (var _i3 = 0; _i3 < allNodes.length; _i3++) {
      $(allNodes[_i3]).removeClass('highlight');
    }

    $(li).addClass('highlight');
  }
}.call();