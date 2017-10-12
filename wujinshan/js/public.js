//$.cookie("GOODS_7", 0);
//$.cookie("GOODS_8", 0);
//$.cookie("GOODS_9", 0);
//$.cookie("GOODS_10", 0);
//$.cookie("GOODS_11", 0);
//$.cookie("GOODS_12", 0);
//cookie的相关代码

$(function() {
	var goodscount = right_count();
	if(!goodscount > 0) {
		$.cookie("GOODS_1", 0, {
			"path": "/"
		});
		$.cookie("GOODS_2", 0, {
			"path": "/"
		});
		$.cookie("GOODS_3", 0, {
			"path": "/"
		});
		$.cookie("GOODS_4", 0, {
			"path": "/"
		});
		$.cookie("GOODS_5", 0, {
			"path": "/"
		});
		$.cookie("GOODS_6", 0, {
			"path": "/"
		});
		$.cookie("GOODS_7", 0, {
			"path": "/"
		});
		$.cookie("GOODS_8", 0, {
			"path": "/"
		});
		$.cookie("GOODS_9", 0, {
			"path": "/"
		});
		$.cookie("GOODS_10", 0, {
			"path": "/"
		});
		$.cookie("GOODS_11", 0, {
			"path": "/"
		});
		$.cookie("GOODS_12", 0, {
			"path": "/"
		});
		$.cookie("GOODS_13", 0, {
			"path": "/"
		});
		$.cookie("GOODS_14", 0, {
			"path": "/"
		});
		$.cookie("GOODS_15", 0, {
			"path": "/"
		});
		$.cookie("GOODS_16", 0, {
			"path": "/"
		});
		$.cookie("GOODS_17", 0, {
			"path": "/"
		});
//		$.cookie("GOODS_18", 0, {
//			"path": "/"
//		});
//		$.cookie("GOODS_19", 0, {
//			"path": "/"
//		});
//		$.cookie("GOODS_20", 0, {
//			"path": "/"
//		});
	}
	$(".jiarugouwuche").click(function() {
		var ckie = $(this).attr("id");
		$.cookie(ckie, parseInt($.cookie(ckie)) + 1, {
			"path": "/"
		});
		right_one_up_shoppingcart();
		setTimeout("right_count()", 600);

	});
})

function right_count() {
	var count_right = 0;
	for(var i = 1; i <= 17; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) > 0) {
			count_right += parseInt($.cookie(ckie));
		}
	}
	$(".gouwucheshangpinshuliang").html(count_right);
	//	alert(count_right);
	return count_right;
}

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

var sTop = 0;

$(document).ready(function() {
	//剩余时间
	a();

	var realtime = setInterval('a()', 1000);
});

function cessssssss() {
	sTop = document.documentElement.scrollTop || document.body.scrollTop;
	//	document.getElementById("ceshi").innerText = sTop;
}

function a() {
	var showtime = document.getElementsByClassName("real_time");
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDay();
	var hour = 23 - now.getHours();
	if(hour<10){hour="0"+hour;}
	var minu = 60 - 1 - now.getMinutes();
	if(minu<10){minu="0"+minu;}
	var second = 60 - 1 - now.getSeconds();
	if(second<10){second="0"+second;}
	var date = now.getDate();
	month += 1;
	var arr_week = new Array("日", "一", "二", "三", "四", "五", "六");
	var week = arr_week[day];
	var time = hour + ":" + minu + ":" + second;
	//	showtime.innerHTML = time;
	for(var i in showtime) {
		showtime[i].innerHTML = time;
	}
	$(".today_new_list_last_time").text(time);
	var time_bottom= "1天"+hour + "小时" + minu + "分" + second+"秒";
	$(".pinpaituan_content_right_one_p4").text(time_bottom);
	
}
//聚会疯抢倒计时
var juhuifengqiangdaojishi_time = 600;

//右侧导航一般动画效果
$(document).ready(function() {
	
	//美妆商城 下拉动画效果
	$(".meizhuangshangcheng_header_bottom_canv").mouseover(function() {
		$(".header_bottom_meizhuangshangcheng").css("height", "300px");
	});
	$(".header_bottom_meizhuangshangcheng").mouseover(function() {
		$(".header_bottom_meizhuangshangcheng").css("height", "300px");
	});
	$(".meizhuangshangcheng_header_bottom_canv").mouseout(function() {
		$(".header_bottom_meizhuangshangcheng").css("height", "0px");
	});
	$(".header_bottom_meizhuangshangcheng").mouseout(function() {
		$(".header_bottom_meizhuangshangcheng").css("height", "0px");
	});

	//与滚动条相关动画

	//右侧导航栏的商品数量设置

})

setInterval("toTop()", 100);
setInterval("cessssssss()", 100);
setInterval("left_nav_can()", 100);

function toTop() {
	if(sTop >= 600) {
		$(".return_top_0").fadeIn();
	} else {
		$(".return_top_0").fadeOut();
	}
}

//左侧导航动画

function left_nav_can() {
	if(sTop > 2600) {
		$(".nav_left_out_div").fadeIn();
	} else {
		$(".nav_left_out_div").fadeOut();
	}
}

//加入购物车操作
function right_one_up_shoppingcart() {
	$("#shopping_cart_one_pic").show();
	setTimeout("right_one_up_shoppingcart_return()", 200);
	setTimeout("right_one_up_shoppingcart_return1()", 610);

}

function right_one_up_shoppingcart_return() {
	$("#shopping_cart_one_pic").css({
		"opacity": "0",
		"top": "-20px"
	});
	$(".gouwucheshangpinshuliang").css({
		"transform": "scale(1.2)",
	})
}

function right_one_up_shoppingcart_return1() {
	$("#shopping_cart_one_pic").hide();
	$("#shopping_cart_one_pic").css({
		"opacity": "1",
		"top": "0px"
	});
	$(".gouwucheshangpinshuliang").css({

		"transform": "scale(1)",
	})
}


//明日预告
$(function(){
	$(".home_top_menu_div .tab_menu_clearfix li:last-child").click(function(){
		location.href="#tommory";
	})
})
