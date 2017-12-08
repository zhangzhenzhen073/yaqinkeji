/**
 * Created by Administrator on 2017/11/24.
 */
/*rem 动态计算html的字体 大小*/
function refreshRem(){
    var desW = 1920 ;
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW *100 +'px';
}
refreshRem();
window.addEventListener('resize',refreshRem);


$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['index','service','information','partner','we'],
        menu: '#myMenu',
        slidesNavigation: true, //左右轮播焦点
        verticalCentered:false
    });
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    },5000)
});
















