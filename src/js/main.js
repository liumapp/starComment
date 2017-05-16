define (function (require , exports , module) {

    exports.init = function () {
        $.fn.starComment = function (options) {

            $(".pStars>span").click(function () {
                $(this).addClass("sactive").siblings().removeClass("sactive");
            });
            $(".pStars2>span").click(function () {
                $(this).addClass("sactive").siblings().removeClass("sactive");
            });
        };
    };

    exports.register = function (options) {
        $(document).starComment(options);
    }
});