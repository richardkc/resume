!function () {
var view = $('section.message')

var model = {
    //获取数据
    fetch: function(){
        var query = new AV.Query('Message');
        return query.find()
    },
    //创建数据
    save: function(name,content){
        var Message = AV.Object.extend('Message')
        var message = new Message();
        return message.save({
            name: name,
            content: content,
        })
    }
}

var controller = {
    view: null,
    messageList: $('#messageList'),
    init: function(view,model){
        this.view = view
        this.model = model
        this.initAV()
        this.loadMessages()
        this.bindEvents()
    },
    initAV: function(){
        var APP_ID = 'wP7AadscEayGbQERUOnxBof1-gzGzoHsz';
        var APP_KEY = 'CKC18asq52XRKY0w9HV8kX4z';
    
        AV.init({appId: APP_ID,appKey: APP_KEY});
    },
    loadMessages: function(){
            this.model.fetch().then(
                function (messages) {
                    let array = messages.map((item) => item.attributes)
                    $(array).each((index, item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        let $messageList = $('#messageList')
                        $($messageList).append(li)
                    })
                }, function (error) {
    
                })
            .then(() => { }, (error) => {
                console.log(error)
            })
    },
    bindEvents: function(){
        let $myForm = $('form#postMenthodForm')
        $myForm.on('submit', (e) => {
            e.preventDefault()
            this.saveInf()
        })
    },
    saveInf: function(){
        let name = $('input[name="name"]').val()
        let content = $('input[name="content"]').val()
        this.model.save(name, content).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}: ${object.attributes.content}`
            let $messageList = $('#messageList')
            $($messageList).append(li)
            $('input[name="content"]').val('')
        })
    }
}
controller.init(view,model)




}.call()








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