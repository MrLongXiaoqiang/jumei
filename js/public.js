$(function(){
	if($.cookie("NOW_UNAME")!=undefined){
		$("#uName").text($.cookie("NOW_UNAME")).css({
			"color":"#ed155b"
		});
		$("#relogin").text("【退出】").css({
			"position":"relative",
			"right":"10px"
		}).attr("href","../yanghui/login.html");
	}
	$("#relogin").click(function(){
		$.removeCookie("NOW_UNAME",{"path":"/"});
	})
	
	right_count();
	$("#right_nav_user").text("祝您购物愉快！");
	$("#right_nav_user_name").text($.cookie("NOW_UNAME"));
	$("#right_nav_user_res").text("");
})



function right_count() {
	var count_right = 0;
	for(var i = 1; i <= 17; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) > 0) {
			count_right += parseInt($.cookie(ckie));
		}
	}
	$("#shop_cart_count").text(count_right);
	//	alert(count_right);
	return count_right;
}
