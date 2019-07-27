setTimeout(function(){                         //时间延迟，用来显示一些特定想显示但是网速加载过快的画面
    siteWelcome.classList.remove('active')
},1000)

window.onscroll = function(){                   //用户滑动窗口的时候触发函数
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
let liTags = document.querySelectorAll('nav.menu > ul > li')                //选择器，并返回其所选中的所有document
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){                                   //鼠标进入指定标签，mouseleave同理
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault()                             //消除原标签的默认动作，这里用来消除原来的锚点#指向相同id
        let a = x.currentTarget
        let href = a.getAttribute('href')             //带#号，获取用户在标签上写的原文，而不是浏览器编译过的带http协议的地址
        let element = document.querySelector(href)     //与querySelectorAll不同的是只返回一个元素，不是一个数组
        let top = element.offsetTop                   //获取一个元素距离浏览器窗口顶端的固定值（此值固定，要获取变动的值应使用element.getBoundingClientRect此API，具体操作mdn）
        window.scrollTo(0,top-80)                      //窗口滑动到某个位置
    }
}