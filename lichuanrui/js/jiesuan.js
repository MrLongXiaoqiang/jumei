//倒计时
var count = 0;

function retime() {
	count++;
	var min = 19 - parseInt(count / 60);
	if(min < 0) {
		window.close();
	}
	var second = 59 - parseInt(count % 60);
	var str = "" + min + "分" + second + "秒";
	document.getElementById("time").innerText = str;
}
setInterval("retime()", 1000);
//小计1
function add_count(aaa) {
	//	if($(this).parent().find(":checkbox").is(":checked")){
	//		
	//	}else{
	////		$(this).parent().find(":checkbox").prop("checked",true);
	//	}
	//	
	$(aaa).prev().val(parseInt($(aaa).prev().val()) + 1);
	var money = parseFloat($(aaa).parent().prev().text()) * parseFloat($(aaa).prev().val())
	$(aaa).parent().parent().find(".xiaoji").text(money.toFixed(2));
	
	gouwuchezongjine();
	//后增加
	var idnum=$(aaa).parent().parent().attr("id");
	$.cookie(idnum,parseInt($.cookie(idnum))+1);
	
	
}

function dec_count(aaa) {
	if(parseInt($(aaa).next().val()) == 1) {
		return false;
	}
	$(aaa).next().val(parseInt($(aaa).next().val()) - 1);
	var money = parseFloat($(aaa).parent().prev().text()) * parseFloat($(aaa).next().val());
	$(aaa).parent().parent().find(".xiaoji").text(money.toFixed(2));
	gouwuchezongjine();
	
	//后增加
	var idnum=$(aaa).parent().parent().attr("id");
	$.cookie(idnum,parseInt($.cookie(idnum))-1);
}

function gouwuchexiaoji(bbb) {
	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));
	
}

//function gouwuchexiaoji(bbb) {
//	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));
//}

function gouwuchezongjine() {
	var totalMoney = 0.0;
	$(".xiaoji").each(function() {
		if($(this).parent().is(":visible")) {
			var check = $(this).parent().find(":checkbox").prop("checked");
			if(check) {
				totalMoney += $(this).text() - 0;
			}
		}

	});
	var str = "￥" + parseFloat(totalMoney).toFixed(2);
	$("#qian").text(str);
	$("#je").text(str);

	shuliang();

}

function shuliang() {
	var count001 = 0;
	$(".shuliang").each(function() {
		if($(this).parent().parent().is(":visible")) {
			count001 = parseInt($(this).val()) + count001;
		}

	})
	if(count001 == 0) {
		location = "empty.html";
	} else {
		$("#yinfu").text(count001);
	}
}
//checkbox单击事件
$(function() {
	$(":checkbox").click(function() {
		if(!$(this).is(":checked")) {
			$(this).prop("checked", false);

		} else {
			$(this).prop("checked", true);
		}
		gouwuchezongjine();
	});
})

//物品的删除与撤销
$(function() {
	//	$("#hide").click(function() {
	//		$(".xiangshui").hide();
	//		$(".chexiao").show();
	//	});
	//	$("#show").click(function() {
	//		$(".chexiao").hide();
	//		$(".xiangshui").show();
	//	});
	//	$("#hide2").click(function() {
	//		$(".xiangshui2").hide();
	//		$(".chexiao2").show();
	//	});
	//	$("#show2").click(function() {
	//		$(".chexiao2").hide();
	//		$(".xiangshui2").show();
	//	});
	//	$("#hide5").click(function() {
	//		$(".xiangshui2").hide();
	//		$(".chexiao2").show();
	//	});
	//	$("#show5").click(function() {
	//		$("#GOODS_3").hide();
	//		$("#GOODS_3").show();
	//	});
	//	$("#hide3").click(function() {
	//		$(".xiangshui").hide();
	//		$(".xiangshui2").hide();
	//	});

	$(".delbutton").click(function() {
		$(this).parent().parent().prev().find(".chexiao").show();
		$(this).parent().parent().hide();
		gouwuchezongjine();
	})
	$(".chexiaoshanche_a").click(function() {
		$(this).parent().hide();
		$(this).parent().parent().parent().next().show();
		gouwuchezongjine();
	})

	//设置cookie

	for(var i = 1; i < 6; i++) {
		var ckie = "GOODS_" + i;
		if(!($.cookie(ckie) > 0)) {
			$("#" + ckie).hide();
		} else {
			$("#" + ckie).show().find(".shuliang").val($.cookie(ckie));
			gouwuchexiaoji($("#" + ckie).find(".addshuliang"));

		}
		gouwuchezongjine();
	}

	$("#hide3").click(function() {

		for(var i = 1; i <= 6; i++) {
			var ckie = "GOODS_" + i;
			$.cookie(ckie, "0");
		}
		location = "empty.html";
	})

});