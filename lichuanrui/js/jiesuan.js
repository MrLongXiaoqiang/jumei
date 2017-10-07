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
}

function dec_count(aaa) {
	if(parseInt($(aaa).next().val()) == 1) {
		return false;
	}
	$(aaa).next().val(parseInt($(aaa).next().val()) - 1);
	var money = parseFloat($(aaa).parent().prev().text()) * parseFloat($(aaa).next().val());
	$(aaa).parent().parent().find(".xiaoji").text(money.toFixed(2));
	gouwuchezongjine();
}

function gouwuchexiaoji(bbb) {
	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));
}

function gouwuchexiaoji(bbb) {
	$(bbb).next().text((parseFloat($(bbb).prev().text()) * parseFloat($(bbb).find("input").val())).toFixed(2));
}

function gouwuchezongjine() {
	var totalMoney = 0.0;
	$(".xiaoji").each(function() {
		var check = $(this).parent().find(":checkbox").prop("checked");
		if(check) {
			totalMoney += $(this).text() - 0;
		} else {}

	});
	var str = "￥" + parseFloat(totalMoney).toFixed(2);
	$("#qian").text(str);
	$("#je").text(str);

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
	$("#hide").click(function() {
		$(".xiangshui").hide();
		$(".chexiao").show();
	});
	$("#show").click(function() {
		$(".chexiao").hide();
		$(".xiangshui").show();
	});
	$("#hide2").click(function() {
		$(".xiangshui2").hide();
		$(".chexiao2").show();
	});
	$("#show2").click(function() {
		$(".chexiao2").hide();
		$(".xiangshui2").show();
	});
	$("#hide3").click(function() {
		$(".xiangshui").hide();
		$(".xiangshui2").hide();
	});

});