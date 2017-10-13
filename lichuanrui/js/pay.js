//索要发票淡入淡出
$(function() {
	$(".question").hover(function() {
		$("#question_neirong ul").fadeIn();
	}, function() {
		$("#question_neirong ul").fadeOut();

	});
//索要发票涛哥效果
	$(".suoyao").click(function() {
		$(".fapioaleixing").slideToggle("fast");
	});
	$("#showdianzi").click(function() {
		$(".youxiang").show();
	});
	$("#hidedianzi").click(function() {
		$(".youxiang").hide();
	});
	$("#showtaitou").click(function() {
		$(".fapiaodanwei").show();
	});
	$("#hidetaitou").click(function() {
		$(".fapiaodanwei").hide();
	});

	$(".discount").click(function() {
		$(".youhui").slideToggle("slow");
	});
	//送货时间单击变色
	$(".time_choese>div").click(function() {
		$(this).css("background", "#0ABFDE").siblings().css("background", "#fff");
	})

	//后增加
	//总商品数量
	var summoney = 0;
	var sumGoods = 0;
	for(var i = 1; i < 18; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) <= 0) {
			$("#" + ckie).hide();
		} else {
			$("#" + ckie).show().find(".shuliang").text($.cookie(ckie));
			var money = parseInt($.cookie(ckie)) * parseInt($("#" + ckie).find(".price_each span").text());
			summoney = summoney + money;
			sumGoods = sumGoods + parseInt($("#" + ckie).find(".shuliang").text());
			$("#" + ckie).find("td:last-child").text("￥" + money);
			$("#shangpinshuliang").text(sumGoods);
		}
	}
	//判断商品数量跳转首页
	$(".summoney").text("￥" + summoney);
	$(".top_pic").click(function() {
		leave_location();
		location = "../index.html";
	})
	$(".jiaoyi").click(function() {
		for(var i = 1; i < 18; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) > 0) {
			$.cookie(ckie, 0, {
				"path": "/"
			});
		} 
	}
		leave_location();
		location = "../wujinshan/payFinish.html";
	})

});
//跳转首页
function leave_location(){
	for(var i = 1; i < 18; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) < 0) {
			$.cookie(ckie, Math.abs($.cookie(ckie)), {
				"path": "/"
			});
		} 
	}
}
