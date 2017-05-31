// JavaScript Document
var scrollVisible=true;//用于判断页面是否可以滚动

$(function(){
    var isApple = (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0 || navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0 || navigator.userAgent.toLowerCase().indexOf("android") >= 0);
    if(!isApple){
        location.href = "../index.html";
    }
    //
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        speed:500,
         onSlideChangeEnd:function(swiper){
            $("#nav li").eq(swiper.activeIndex).addClass("current").siblings().removeClass("current");
            if(swiper.activeIndex==0){
                $(".scroll_tips").show();
            }else{
                $(".scroll_tips").hide();
            }
         }
    });
    function slidePage(i){
        swiper.slideTo(i);
    }
    
    
    
    //阻止网页默认动作（即网页滚动）
    $(window).bind('touchmove', function (e) {
        if(!scrollVisible){
            e.returnValue = false;
            e.stopPropagation && e.stopPropagation();
            return false;
        }
    })

    //导航开关
    $(".nav_icon").click(function(){
        if($(this).hasClass("open")){
            $("#nav").hide();
            scrollVisible=true;
            $(this).removeClass("open").children("img").attr("src","images/nav_list.png");
        }else{
            $("#nav").show();
            scrollVisible=false;
            $(this).addClass("open").children("img").attr("src","images/nav_close.png");
        }
    });
    //导航点击事件
    $("#nav li").click(function(){
        slidePage($(this).index());
        $(this).addClass("current").siblings().removeClass("current");
        $("#nav").hide();
        scrollVisible=true;
        $(".nav_icon").removeClass("open").children("img").attr("src","images/nav_list.png");
    });
    
    $(window).load(function(){
        function init(){
            var winH=$(window).height(),winW=$(window).width();
            var headerH=$("#header").height();
            $("#nav").css({"height":winH-headerH,"top":headerH});
            $(".wrapper").css("margin-top",headerH);
            if($(window).scrollTop()>0){
                $(".scroll_tips").hide();
            }
            $(".swiper-slide").css("padding-top",headerH);
            /*if(winW>=990){
                location.href = "../index.html";
            }*/
        }
        init();
        $(window).resize(function(){
            init(); 
        });
    });
})