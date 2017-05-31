
var isApple = (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0 || navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0 || navigator.userAgent.toLowerCase().indexOf("android") >= 0);

if(isApple){
    location.href = "mobile/index.html";
}

(function ($) {
    fortyTwo = function () {
        this.init();
    };
    $.extend(fortyTwo.prototype, {
        init: function (data) {
            this.load();
        },
        load: function () {
            var self = this;
            $("#fullpage").fullpage({
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
                menu: '#nav',
                easing: "easeInOutQuint",
                scrollingSpeed: 1000,
                afterRender: function () {
                    //console.log("完成");
                },
                afterLoad: function (anchorLink, index) {
                    //处理导航选中状态
                    if(index==1){
                        $(".logo").hide();
                    }else{
                        $(".logo").show();
                    }
                    if(index==5){
                        $(".logo").attr("src","images/logo2.png");  
                    }else{
                        $(".logo").attr("src","images/logo.png");
                    }
                },
                onLeave: function (index) {
                   // console.log("onLeave"+index);
                    if(index==1){$(".logo").show();}
                }
            });
        }

    });

    
})(jQuery);


$(function () {
    var fortytwo = new fortyTwo();
    
    function resize(){
        var winW=$(window).width(),winH=$(window).height();
        if(winH<900){
            $(".section img.pic").addClass("pic2");
        }else{
            $(".section img.pic").removeClass("pic2");
        }
        /*if(winW<990){
            location.href = "mobile/index.html";
        }*/
    }
    resize();
    $(window).resize(function(){
        resize();   
    });
    //导航点击事件
        
    $("#nav .close").click(function(){
        $("#nav").stop().animate({"right":"-20%"},500);
    });
    //展开导航
    $(".icon_nav").click(function(){
        $("#nav").stop().animate({"right":"0%"},500);
    });
});

