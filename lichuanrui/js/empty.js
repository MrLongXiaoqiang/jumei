$(function() {

	var count = 0;
	for(var i = 1; i <= 6; i++) {
		var ckie = "GOODS_" + i;
		count += parseInt($.cookie(ckie));
	}
	alert(count);
	var count_right = 0;
	for(var i = 1; i < 6; i++) {
		var ckie = "GOODS_" + i;
		if($.cookie(ckie) > 0) {
			count_right += parseInt($.cookie(ckie));
		}
	}
	alert(count_right);
})