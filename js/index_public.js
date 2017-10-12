$(function(){
	if($.cookie("NOW_UNAME")!=undefined){
		$("#uName").text($.cookie("NOW_UNAME")).css({
			"color":"#ed155b"
		});
		$("#relogin").text("【退出】").css({
			"position":"relative",
			"right":"10px"
		}).attr("href","yanghui/login.html");
		$("#right_nav_user").text("祝您购物愉快！");
		$("#right_nav_user a:first-child").text($.cookie("NOW_UNAME"));
		$("#right_nav_user a:last-child").text("");
	}
	$("#relogin").click(function(){
		$.removeCookie("NOW_UNAME",{"path":"/"});
	})
})
