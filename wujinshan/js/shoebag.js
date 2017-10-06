$(function(){
//右侧导航动画

$(".sport_ad_pic_row2 p").hover(function(){
	var index=$(this).index()+1;
	if(index==1){
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_1")

	}else if(index==2){
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_2")

	}else{
			$(this).parent().find("#sport_ad_pic_row2_textder").removeClass().addClass("sport_ad_pic_row2_underlineposition_3")

	}
	
	
},function(){})

	
	
})