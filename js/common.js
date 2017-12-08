/**
 * Created by Administrator on 2017/11/24.
 */

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
















