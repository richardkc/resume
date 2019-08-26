"use strict";

!function () {
  var view = View('section.message');
  var model = Model({
    resourceName: 'Message'
  });
  var controller = Controller({
    init: function init() {
      this.messageList = $('#messageList');
      this.loadMessages();
      this.bindEvents();
    },
    loadMessages: function loadMessages() {
      this.model.fetch().then(function (messages) {
        var array = messages.map(function (item) {
          return item.attributes;
        });
        $(array).each(function (index, item) {
          var li = document.createElement('li');
          li.innerText = "".concat(item.name, ": ").concat(item.content);
          var $messageList = $('#messageList');
          $($messageList).append(li);
        });
      }, function (error) {}).then(function () {}, function (error) {
        console.log(error);
      });
    },
    bindEvents: function bindEvents() {
      var _this = this;

      $('form#postMenthodForm').on('submit', function (e) {
        e.preventDefault();

        _this.saveInf();
      });
    },
    saveInf: function saveInf() {
      var name = $('input[name="name"]').val();
      var content = $('input[name="content"]').val();
      this.model.save({
        'name': name,
        'content': content
      }).then(function (object) {
        var li = document.createElement('li');
        li.innerText = "".concat(object.attributes.name, ": ").concat(object.attributes.content);
        var $messageList = $('#messageList');
        $($messageList).append(li);
        $('input[name="content"]').val('');
      });
    }
  });
  controller.init(view, model);
}.call();
/*
//创建 TestObject 表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是 words: 'Hello wprld!' 保存
//如果数据保存成功，则运行console.log('保存成功')
testObject.set('words', 'Hello world!');
testObject.save().then(function (testObject) {
  console.log('保存成功。')
})
*/