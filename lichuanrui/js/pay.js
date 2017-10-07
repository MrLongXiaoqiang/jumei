$(function(){
	$(".question").hover(function(){
		$("#question_neirong ul").fadeIn();
	},function(){
		$("#question_neirong ul").fadeOut();
		
	});
	$(".suoyao").click(function(){
		$(".fapioaleixing").slideToggle("fast");
	});
	$("#showdianzi").click(function(){
		$(".youxiang").show();
	});
	$("#hidedianzi").click(function(){
		$(".youxiang").hide();
	});
	$("#showtaitou").click(function(){
		$(".fapiaodanwei").show();
	});
	$("#hidetaitou").click(function(){
		$(".fapiaodanwei").hide();
	});
	
	$(".discount").click(function(){
		$(".youhui").slideToggle("slow");
	});
	$(".time_choese>div").click(function(){
		$(this).css("background","#0ABFDE").siblings().css("background","#fff");
	})
	
	
	
	
});