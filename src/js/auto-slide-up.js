!function () {
    setTimeout(() => {
        findClosestAndRemoveOffset()
    }, 10);

    let $specialTags = $('[data-x]')
    for (let i = 0; i < $specialTags.length; i++) {
        $($specialTags[i]).addClass('offset')
    }
    window.addEventListener('scroll', (x) => {
        findClosestAndRemoveOffset()
    })

    /*  helper  */

    let liTags = document.querySelectorAll('nav.menu > ul > li')                //选择器，并返回其所选中的所有document
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {                                   //鼠标进入指定标签，mouseleave同理
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
    function findClosestAndRemoveOffset() {
        let $specialTags = $('[data-x]')
        let minIndex = 0
        for (let i = 0; i < $specialTags.length; i++) {
            if (Math.abs($specialTags[i].offsetTop - window.scrollY) < Math.abs($specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        //$specialTags[minIndex]是离窗口最近的元素
        $($specialTags[minIndex]).removeClass('offset')
        let id = $specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let allNodes = li.parentNode.children
        for (let i = 0; i < allNodes.length; i++) {
            $(allNodes[i]).removeClass('highlight')
        }
        $(li).addClass('highlight')
    }
}.call()