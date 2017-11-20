$(document).ready(function(){

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

    // ウィンドウの高さを取得
    var winH = $(window).height();
    var winHalfH = winH / 2;

    // 各セクショントップのY座標を取得
    //企業
    var sec1T = $('#section_1').offset().top -650;
    var sec2T = $('#section_2').offset().top -650;
    var sec3T = $('#section_3').offset().top -650;
    var sec4T = $('#section_4').offset().top -650;
    //学習
    var sec5T = $('#section_5').offset().top -650;

    //食品
    var sec6T = $('#section_6').offset().top -650;
    var sec7T = $('#section_7').offset().top -650;
    //ファッション
    var sec8T = $('#section_8').offset().top -650;
    var sec9T = $('#section_9').offset().top -650;
    var sec10T = $('#section_10').offset().top -650;
    var sec11T = $('#section_11').offset().top -650;
    var sec12T = $('#section_12').offset().top -650;
    //健康・医療
    var sec13T = $('#section_13').offset().top -650;
    var sec14T = $('#section_14').offset().top -650;
    var sec15T = $('#section_15').offset().top -650;
    var sec16T = $('#section_16').offset().top -650;
    var sec17T = $('#section_17').offset().top -650;
    var sec18T = $('#section_18').offset().top -650;
    var sec19T = $('#section_19').offset().top -650;
    var sec20T = $('#section_20').offset().top -650;
    var sec21T = $('#section_21').offset().top -650;
    var sec22T = $('#section_22').offset().top -650;
    var sec23T = $('#section_23').offset().top -650;
    var sec24T = $('#section_24').offset().top -650;

    $(window).on('scroll', function() {

        // 現在のスクロール位置
        var scrollPos = $(this).scrollTop();

        // section-1 から section-2 の間をスクロールしている時
        if ( (scrollPos >= sec1T) && (scrollPos < sec2T) ) {

            // section-1 の画面半分までスクロールしたら rotate(0deg) にする
            var rotateX = 90 - ( (scrollPos - sec1T) * (1 / (winHalfH / 90)) );
            // 角度がマイナスになったら 0 に固定する
            if (rotateX <= 0) { rotateX = 0; }
            // rotate の値を代入しアニメーションさせる
            $('#content_1 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            // 次の section の rotate をリセット
            $('#content_2 > .company').css({'transform': 'rotateX(90deg)' });

        }
        // section-2 から section-3 の間をスクロールしている時
        else if ( (scrollPos >= sec2T) && (scrollPos < sec3T) ) {
            var rotateX = 90 - ((scrollPos - sec2T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_2 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_3 > .company').css({'transform': 'rotateX(90deg)' });

        }
        // section-3 から section-4 の間をスクロールしている時
        else if ( (scrollPos >= sec3T) && (scrollPos < sec4T) ) {
            var rotateX = 90 -  ((scrollPos - sec3T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_3 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_4 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-4 から section-5 の間をスクロールしている時
        else if( (scrollPos >= sec4T) && (scrollPos < sec5T) )  {
            var rotateX = 90 -  ((scrollPos - sec4T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_4 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_5 > .company').css({'transform': 'rotateX(90deg)' });
        }
		// section-5 から section-6 の間をスクロールしている時
        else if  ( (scrollPos >= sec5T) && (scrollPos < sec6T) )  {
            var rotateX = 90 -  ((scrollPos - sec5T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_5 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_6 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-6 から section-7 の間をスクロールしている時
        else if  ( (scrollPos >= sec6T) && (scrollPos < sec7T) )  {
            var rotateX = 90 -  ((scrollPos - sec6T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_6 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_7 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-7 から section-8 の間をスクロールしている時
        else if  ( (scrollPos >= sec7T) && (scrollPos < sec8T) )  {
            var rotateX = 90 -  ((scrollPos - sec7T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_7 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_8 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-8 から section-9 の間をスクロールしている時
        else if  ( (scrollPos >= sec8T) && (scrollPos < sec9T) )  {
            var rotateX = 90 -  ((scrollPos - sec8T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_8 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_9 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-9 から section-10 の間をスクロールしている時
        else if  ( (scrollPos >= sec9T) && (scrollPos < sec10T) )  {
            var rotateX = 90 -  ((scrollPos - sec9T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_9 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_10 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-10 から section-11 の間をスクロールしている時
        else if  ( (scrollPos >= sec10T) && (scrollPos < sec11T) )  {
            var rotateX = 90 -  ((scrollPos - sec10T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_10 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_11 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-11 から section-12 の間をスクロールしている時
        else if  ( (scrollPos >= sec11T) && (scrollPos < sec12T) )  {
            var rotateX = 90 -  ((scrollPos - sec11T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_11 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_12 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-12 から section-13 の間をスクロールしている時
        else if  ( (scrollPos >= sec12T) && (scrollPos < sec13T) )  {
            var rotateX = 90 -  ((scrollPos - sec12T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_12 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_13 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-13 から section-14 の間をスクロールしている時
        else if  ( (scrollPos >= sec13T) && (scrollPos < sec14T) )  {
            var rotateX = 90 -  ((scrollPos - sec13T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_13 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_14 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-14 から section-15 の間をスクロールしている時
        else if  ( (scrollPos >= sec14T) && (scrollPos < sec15T) )  {
            var rotateX = 90 -  ((scrollPos - sec14T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_14 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_15 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-15 から section-16 の間をスクロールしている時
        else if  ( (scrollPos >= sec15T) && (scrollPos < sec16T) )  {
            var rotateX = 90 -  ((scrollPos - sec15T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_15 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_16 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-16 から section-17 の間をスクロールしている時
        else if  ( (scrollPos >= sec16T) && (scrollPos < sec17T) )  {
            var rotateX = 90 -  ((scrollPos - sec16T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_16 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_17 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-17 から section-18 の間をスクロールしている時
        else if  ( (scrollPos >= sec17T) && (scrollPos < sec18T) )  {
            var rotateX = 90 -  ((scrollPos - sec17T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_17 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_18 > .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-18 から section-19 の間をスクロールしている時
        else if  ( (scrollPos >= sec18T) && (scrollPos < sec19T) )  {
            var rotateX = 90 -  ((scrollPos - sec18T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_18 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_19> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-19 から section-20 の間をスクロールしている時
        else if  ( (scrollPos >= sec19T) && (scrollPos < sec20T) )  {
            var rotateX = 90 -  ((scrollPos - sec19T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_19 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_20> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-20 から section-21 の間をスクロールしている時
        else if  ( (scrollPos >= sec20T) && (scrollPos < sec21T) )  {
            var rotateX = 90 -  ((scrollPos - sec20T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_20 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_21> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-21 から section-22 の間をスクロールしている時
        else if  ( (scrollPos >= sec21T) && (scrollPos < sec22T) )  {
            var rotateX = 90 -  ((scrollPos - sec21T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_21 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_22> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-22 から section-23 の間をスクロールしている時
        else if  ( (scrollPos >= sec22T) && (scrollPos < sec23T) )  {
            var rotateX = 90 -  ((scrollPos - sec22T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_22 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_23> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-23 から section-24 の間をスクロールしている時
        else if  ( (scrollPos >= sec23T) && (scrollPos < sec24T) )  {
            var rotateX = 90 -  ((scrollPos - sec23T) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_23 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
            $('#content_24> .company').css({'transform': 'rotateX(90deg)' });
        }
        // section-24 以降をスクロールしている時
        else if (scrollPos >= sec24T) {
            var rotateX = 90 -  ((scrollPos - sec24T + 100) * (1 / (winHalfH / 90) ));
            if (rotateX <= 0) { rotateX = 0; }
            $('#content_24 > .company').css({'transform': 'rotateX(' + rotateX + 'deg)' });
        }

    });
}


});