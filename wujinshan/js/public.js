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
	}
	$(".jiarugouwuche").click(function() {
		var ckie = $(this).attr("id");
		$.cookie(ckie, parseInt($.cookie(ckie)) + 1, {
			"path": "/"
		});
		right_count();
	});
})

function right_count() {
	var count_right = 0;
	for(var i = 1; i < 6; i++) {
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
	var minu = 60 - 1 - now.getMinutes();
	var second = 60 - 1 - now.getSeconds();
	var date = now.getDate();
	month += 1;
	var arr_week = new Array("日", "一", "二", "三", "四", "五", "六");
	var week = arr_week[day];
	var time = hour + ":" + minu + ":" + second;
	//	showtime.innerHTML = time;
	for(var i in showtime) {
		showtime[i].innerHTML = time;
	}
}
//聚会疯抢倒计时
setInterval("juhuifengqiangdaojishi()", 100);
var juhuifengqiangdaojishi_time = 600;

//function juhuifengqiangdaojishi() {
//	juhuifengqiangdaojishi_time--;
//	if(juhuifengqiangdaojishi_time < 0) {
//		document.getElementsByClassName("footer_ms_mostly")[0].style.display = "none";
//
//	}
//	var min = parseInt(juhuifengqiangdaojishi_time / 10 / 60);
//	var sec = parseInt(juhuifengqiangdaojishi_time / 10 % 60);
//	var msec = parseInt(juhuifengqiangdaojishi_time % 10);
//	min = "0" + min;
//	if(sec.length < 10) {
//		sec = "0" + sec
//
//	}
//	var ad_bottom_time = document.getElementsByClassName("footer_ms_mostly_center_time_up_center_span")[0];
//	ad_bottom_time.innerText = "   " + min + "分" + sec + "." + msec + "秒";
//
//}
//右侧导航一般动画效果
$(document).ready(function() {
	//	$(".ul_li_position_realitive").mouseover(function(){
	////		alert(123)
	//		$(".ul_li_position_realitive .nav_right_center_normal_div").fadeIn();
	//		$(".ul_li_position_realitive .nav_right_center_normal_div").CSS("right","40px");
	//	});
	//	$(".ul_li_position_realitive").mouseout(function(){
	////		alert(123)
	//		$(".ul_li_position_realitive .nav_right_center_normal_div").fadeOut();
	//	});

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