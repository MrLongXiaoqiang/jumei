$(function() {
	//右侧导航动画

	$(".sport_ad_pic_row2 p").hover(function() {
		var index = $(this).index() + 1;
		if(index == 1) {
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_1")
			$(this).parent().parent().find(".sport_ad_pic_row3").show();
			$(this).parent().parent().find(".sport_ad_pic_row4").hide();
			$(this).parent().parent().find(".sport_ad_pic_row5").hide();

		} else if(index == 2) {
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_2")
			$(this).parent().parent().find(".sport_ad_pic_row4").show();
			$(this).parent().parent().find(".sport_ad_pic_row5").hide();
			$(this).parent().parent().find(".sport_ad_pic_row3").hide();
		} else {
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_3")
			$(this).parent().parent().find(".sport_ad_pic_row5").show();
			$(this).parent().parent().find(".sport_ad_pic_row3").hide();
			$(this).parent().parent().find(".sport_ad_pic_row4").hide();
		}

	}, function() {})

})