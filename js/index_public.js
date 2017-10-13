$(function() {
	if($.cookie("NOW_UNAME") != undefined) {
		$("#uName").text($.cookie("NOW_UNAME")).css({
			"color": "#ed155b"
		});
		$("#relogin").text("【退出】").css({
			"position": "relative",
			"right": "10px"
		}).attr("href", "yanghui/login.html");
		$("#right_nav_user").text("祝您购物愉快！");
		$("#right_nav_user a:first-child").text($.cookie("NOW_UNAME"));
		$("#right_nav_user a:last-child").text("");
	}
	$("#relogin").click(function() {
		$.removeCookie("NOW_UNAME", {
			"path": "/"
		});
	})

	$(".pinpaituan").click(function() {
		location = "xulei/mall.html";
	})
	$(".today_main_content_a_one_pic").click(function() {
		location = "xulei/mall.html";
	})
	$(".today_new_list_pic a").click(function() {
		//		alert(123);
		location = "xulei/mall.html";
	})

})

//搜索

//左侧导航动画

function left_nav_can() {
	if(sTop > 2600) {
		$(".nav_left_out_div").fadeIn();
	} else {
		$(".nav_left_out_div").fadeOut();
	}
}

//加入购物车操作

//搜索框下拉选项设置

