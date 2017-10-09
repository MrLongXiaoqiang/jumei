$(function() {
	$(".question").hover(function() {
		$("#question_neirong ul").fadeIn();
	}, function() {
		$("#question_neirong ul").fadeOut();

	});
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
	$(".time_choese>div").click(function() {
		$(this).css("background", "#0ABFDE").siblings().css("background", "#fff");
	})

	//后增加
	var summoney = 0;
	for(var i = 1; i < 6; i++) {

		var ckie = "GOODS_" + i;
		if($.cookie(ckie) == 0) {
			$("#" + ckie).hide();
		} else {
			$("#" + ckie).show().find(".shuliang").text($.cookie(ckie));
			var money = parseInt($.cookie(ckie)) * parseInt($("#" + ckie).find(".price_each span").text());
			summoney = summoney + money;
//			alert(money);
//			alert(summoney);
			$("#" + ckie).find("td:last-child").text("￥" + money);

		}

	}
	$(".summoney").text("￥" + summoney);
	
	
	$(".top_pic").click(function(){
		location="../index.html";
	})
});