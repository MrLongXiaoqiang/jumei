$(function() {
	$("#watch_pic_left").mousemove(function() {
		goods_bigpic_show(this);
	})
	$("#watch_pic_left").hover(function() {
		$(this).next().fadeIn();
		$(this).find("#watch_pic_choice").fadeIn();
	},function(){
		$(this).next().fadeOut();
		$(this).find("#watch_pic_choice").fadeOut();
	})
})

function goods_bigpic_show(Dompic_left_div) {
	var pic_left_div = $(Dompic_left_div);
	var x = event.pageX - pic_left_div.offset().left;
	var y = event.pageY - pic_left_div.offset().top;
	var watch_pic_choice = $("#watch_pic_choice");
	var show_div_x = x - watch_pic_choice.width() / 2;
	var show_div_y = y - watch_pic_choice.height() / 2;
	if(x < (watch_pic_choice.width() / 2)) {
		watch_pic_choice.css({
			"left": 0
		})
		pic_left_div.next().find("img").css({
			"left": 0
		})
	}
	if(x > (pic_left_div.width() - watch_pic_choice.width() / 2)) {
		watch_pic_choice.css({
			"left": (pic_left_div.width() - watch_pic_choice.width() / 1)
		})
		pic_left_div.next().find("img").css({
			"left": -(pic_left_div.width() - watch_pic_choice.width() / 1) * 3
		})
	}
	if(x > (watch_pic_choice.width() / 2) && x < (pic_left_div.width() - watch_pic_choice.width() / 2)) {
		watch_pic_choice.css({
			"left": show_div_x
		})
		pic_left_div.next().find("img").css({
			"left": -(show_div_x * 3)
		})
	}
	if(y > (watch_pic_choice.height() / 2) && y < (pic_left_div.height() - watch_pic_choice.height() / 2)) {
		watch_pic_choice.css({
			"top": show_div_y
		})
		pic_left_div.next().find("img").css({
			"top": (-show_div_y * 3)
		})
	}
	if(y < (watch_pic_choice.height() / 2)) {
		watch_pic_choice.css({
			"top": 0
		})
		pic_left_div.next().find("img").css({
			"top": 0
		})
	}
	if(y > (pic_left_div.height() - watch_pic_choice.height() / 2)) {
		watch_pic_choice.css({
			"top": (pic_left_div.height() - watch_pic_choice.height() / 1)
		})
		pic_left_div.next().find("img").css({
			"top": -(pic_left_div.height() - watch_pic_choice.height() / 1) * 3
		})
	}
}