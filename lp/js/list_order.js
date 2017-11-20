$(document).ready(function(){

	var timer = false;
    $(window).on("load resize", ReLayout);

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

		//リストを上から順番に表示する
		$(function(){
			$('.fadein-li')
				.css({opacity: 0})
				.each(function(i){
					$(this).delay(300*i).animate({opacity:1}, 1500);
				});
		});
	}
});