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
	var idnum = $(aaa).parent().parent().attr("id");
	$.cookie(idnum, parseInt($.cookie(idnum)) + 1, {
		"path": "/"
	});
	$(aaa).parent().parent().find("input[type=checkbox]").prop("checked", true);
}


//小计
function dec_count(aaa) {
	if(parseInt($(aaa).next().val()) == 1) {
		return false;
	}
	$(aaa).next().val(parseInt($(aaa).next().val()) - 1);
	var money = parseFloat($(aaa).parent().prev().text()) * parseFloat($(aaa).next().val());
	$(aaa).parent().parent().find(".xiaoji").text(money.toFixed(2));
	gouwuchezongjine();

	//后增加
	var idnum = $(aaa).parent().parent().attr("id");
	$.cookie(idnum, parseInt($.cookie(idnum)) - 1, {
		"path": "/"
	});
	$(aaa).parent().parent().find("input[type=checkbox]").prop("checked", true);
}

function gouwuchexiaoji(bbb) {
	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));

}

//function gouwuchexiaoji(bbb) {
//	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));
//}


//购物车总金额
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
//判断购物车数量
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
			var idName = $(this).parent().parent().parent().attr("id");
			$.cookie(idName, -Math.abs($.cookie(idName)), {
				"path": "/"
			});

		} else {
			$(this).prop("checked", true);
			$.cookie(idName, Math.abs($.cookie(idName)), {
				"path": "/"
			});
		}
		gouwuchezongjine();
	});
})

//物品的删除与撤销
$(function() {

	$(".delbutton").click(function() {
		$(this).parent().parent().prev().find(".chexiao").show();
		str = "del" + $(this).parent().parent().attr("id");
		$.cookie(str, $.cookie($(this).parent().parent().attr("id")));
		$.cookie($(this).parent().parent().attr("id"), 0, {
			"path": "/"
		});

		$(this).parent().parent().hide();
		gouwuchezongjine();
	})
	$(".chexiaoshanche_a").click(function() {
		$(this).parent().hide();
		str = "del" + $(this).parent().parent().parent().next().attr("id")
		$.cookie($(this).parent().parent().parent().next().attr("id"), $.cookie(str), {
			"path": "/"
		});
		$.cookie(str, 0);
		$(this).parent().parent().parent().next().show();
		gouwuchezongjine();
	})

	//设置cookie
	for(var i = 1; i < 18; i++) {
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
		var count = 0;
		for(var i = 1; i <= 18; i++) {
			var ckie = "GOODS_" + i;
			$.cookie(ckie, 0, {
				path: "/"
			});
			console.log(ckie + "==" + $.cookie(ckie));
			count += parseInt($.cookie(ckie));
		}
		//		alert(count);
		location = "empty.html";
	})

});