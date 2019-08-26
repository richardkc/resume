window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            var APP_ID = 'wP7AadscEayGbQERUOnxBof1-gzGzoHsz';
            var APP_KEY = 'CKC18asq52XRKY0w9HV8kX4z';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        fetch: function(){
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function(object){
            var X = AV.Object.extend(resourceName)
            var x = new X();
            return x.save(object)
        }
    }
}