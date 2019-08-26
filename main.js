/*portfolioALL.onclick= function(){
    portfolioBar.className = 'bar state-1'
}
portfolioFramework.onclick= function(){
    portfolioBar.className = 'bar state-2'
}
portfolioVallina.onclick= function(){
    portfolioBar.className = 'bar state-3'
}*/

/*
setTimeout(function(){                         //时间延迟，用来显示一些特定想显示但是网速加载过快的画面
    siteWelcome.classList.remove('active')
},200)*/




var $sliderbutton = $('#mySlides>#sliderButton')
for (let i = 0; i < $sliderbutton.length; i++) {
    $($sliderbutton[i]).on('click', (e) => {
        $($sliderbutton[i]).addClass('active')
        setTimeout(() => {
            $($sliderbutton[i]).removeClass('active')
        }, 500)
    })
}







