/**
 * Created by zhan on 2016/4/21.
 */
$(function(){
    //返回顶部
    var offset_Top = $("#back").offset().top;
    $(window).scroll(function(){
        var scrollVal = $(window).scrollTop();
        if(scrollVal>100){
            $("#back").fadeIn(1200);
        }else{
            $("#back").fadeOut(1200);
        }
    });
    if(Math.floor(offset_Top)>100){
        $("#back").fadeIn(1200);
    }else{
        $("#back").fadeOut(1200);
    }


    $("#backTop").click(function(){
        $("html,body").animate({scrollTop:0},600);
        return false;
    });
    

    //轮播图
    $("#slider").responsiveSlides({
        auto:true,
        pager:false,
        nav:true,
        speed:1000,
        timeout:4000,
        pager:true,
        pauseControls: true,
        namespace: "callbacks"
    });
});