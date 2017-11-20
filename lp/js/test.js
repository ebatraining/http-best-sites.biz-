$(function(){

    var timer = false;
    $(window).on("load resize", ReLayout); //リサイズもしくはロードされた時にReLayout呼び出し

    function ReLayout(event) {
        var _width = $(window).width(); //画面サイズ取得

                //リサイズ終了時のみリロードする
        if(event.type == 'resize') {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                location.href = location.href; //リロード
            }, 200);
        }
    
        $(window).on('scroll', Movement);

        function Movement() {

            var scrollPos = $(this).scrollTop();

            if(_width > 767) {
                console.log(scrollPos);

                var logoT1 = $('.logo').offset().top + 150;
                console.log(logoT1);
                if (scrollPos >= logoT1) {
                    console.log("e");
                    $('.logo,.links').animate({'marginTop': '100px'});  
                } else {
                    $('.logo,.links').animate({'marginTop': '0px'});
                    Movement(); 
                }
            } else {
                var logoT2 = $('.logo').offset().top + 50;
                if (scrollPos >= logoT2) {
                    $('.logo,.news,.links').animate({'marginTop': '50px'});
                }
            }

          }

    };
});