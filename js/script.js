$(document).ready(function(){

// .wrap_popup_open

    $(".wrap_popup_open > .popup_open > .box_button > .button_close").click(function(){
        $(".wrap_popup_open").addClass("active");
    });

// .wrap_topbar

    $(".wrap_topbar").addClass("active");

    $(".wrap_topbar > .topbar01 > .lang > li").click(function(){
        $(".wrap_topbar > .topbar01 > .lang > li > div > .icon_expand").toggleClass("active");

        var test = $(this).children("ul").hasClass("active");
        if(test){
            $(this).children("ul").removeClass("active");
        }else{
            $(this).children("ul").addClass("active");
        }    
    });


// .wrap_mainvisual

    $(".wrap_mainvisual > .mainvisual > .box_slider > .slider").slick({
        infinite:false,
        draggable:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        prevArrow:$(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_slide > .box_image.prev"),
        nextArrow:$(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_slide > .box_image.next"),
    });
    $(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_slide > .box_image.pause").click(function(){
        $(this).removeClass("active");
        $(this).siblings().addClass("active");
        $(".wrap_mainvisual > .mainvisual > .box_slider > .slider").slick("slickPause");
    });
    $(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_slide > .box_image.play").click(function(){
        $(this).removeClass("active");
        $(this).siblings().addClass("active");
        $(".wrap_mainvisual > .mainvisual > .box_slider > .slider").slick("slickPlay");
    });
    $(".wrap_mainvisual > .mainvisual > .box_slider > .slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
        $(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_slide > .page > span").text(nextSlide + 1 + " ");
    });

// .popup_mainvisual

    $(".wrap_mainvisual > .mainvisual > .box_slider > .box_button > .button_list").click(function(){
        $(".popup_mainvisual").addClass("active");
    });
    $(".popup_mainvisual > .box_popup > .box1 > .button_close").click(function(){
        $(".popup_mainvisual").removeClass("active");
    });

// .wrap_footer
    $(".wrap_footer > .footer > .box_outerlink > .box_family > ul > li").click(function(){
        var test = $(this).hasClass("active");

        if(test){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        };
        
    });




});