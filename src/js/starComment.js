

(function ($) {

   
    $.fn.starComment = function (options) {

        $(".pStars>span").click(function () {
            $(this).addClass("sactive").siblings().removeClass("sactive");
        });
        $(".pStars2>span").click(function () {
            $(this).addClass("sactive").siblings().removeClass("sactive");
        });
    };
    
    
} (jQuery) );