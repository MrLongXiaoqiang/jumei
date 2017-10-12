

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

$(function(){
	$("#search_history ul").html($.cookie("SEARCH_ALL1"));
	$("#header_search_button").click(function(){
		var str=$(this).prev().val().trim();
		if(str.length>=1&&str!=null){
			$.cookie("HIS_SEARCH",str,{"path":"/"});
			var listr="<li>"+str+"</li>"
			$(this).parent().next().find("ul").html(listr+$(this).parent().next().find("ul").html());
			$(this).prev().val("");
			var search_all=$(this).parent().next().find("ul").html();
			$.cookie("SEARCH_ALL1",search_all);
			
		}
	})
	$("#index_search_text").focus(function(){
		$(this).parent().next().slideDown()
	})
	$("#index_search_text").blur(function(){
		setTimeout("search_history_div_hide()",100);
	})
	
	$("#search_history ul li").click(function(){
		$(this).parent().parent().show();
		$(this).parent().parent().prev().find("#index_search_text").val($(this).text());
//		alert($(this).parent().parent().prev().find("#index_search_text"));
	})

})
function search_history_div_hide(){
	$("#search_history").slideUp();
}
