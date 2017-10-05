//测试用

var sTop=0;
function cessssssss() {
	sTop = document.documentElement.scrollTop || document.body.scrollTop;
//	document.getElementById("ceshi").innerText = sTop;
}
setInterval("cessssssss()",100);
setInterval("nav_top()",100);

function nav_top(){
	if(sTop>595){
		$(".header_bottom_nav").css({"position":"fixed","top":"0px"})
	}else{
		$(".header_bottom_nav").css({"position":"relative","bottom":"0px"})
	}
	
}
$(function(){
	$(document).scroll(function(){
		var top=$(document).scrollTop();
		if(top<2248&&top>=600){
			$("#nav_1").addClass("nav_hover_a");
			$("#nav_1 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_1").parent().css({"background": "#ed155b"});
		}else{
			$("#nav_1").removeClass("nav_hover_a");
			$("#nav_1 span:first-child").css({"background-position-y": "0px"});
			$("#nav_1").parent().css({"background": "#fafafa"});
		}
		
		if(top<4970&&top>=2248){
			$("#nav_2").addClass("nav_hover_a");
			$("#nav_2 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_2").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_2").removeClass("nav_hover_a");
			$("#nav_2 span:first-child").css({"background-position-y": "0px"});
			$("#nav_2").parent().css({"background": "#fafafa"});
		}
		if(top<11508&&top>=4970){
			$("#nav_3").addClass("nav_hover_a");
			$("#nav_3 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_3").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_3").removeClass("nav_hover_a");
			$("#nav_3 span:first-child").css({"background-position-y": "0px"});
			$("#nav_3").parent().css({"background": "#fafafa"});
		}
		if(top<12780&&top>=11508){
			$("#nav_4").addClass("nav_hover_a");
			$("#nav_4 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_4").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_4").removeClass("nav_hover_a");
			$("#nav_4 span:first-child").css({"background-position-y": "0px"});
			$("#nav_4").parent().css({"background": "#fafafa"});
		}
		if(top<13591&&top>=12780){
			$("#nav_5").addClass("nav_hover_a");
			$("#nav_5 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_5").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_5").removeClass("nav_hover_a");
			$("#nav_5 span:first-child").css({"background-position-y": "0px"});
			$("#nav_5").parent().css({"background": "#fafafa"});
		}
		if(top<15092&&top>=13591){
			$("#nav_6").addClass("nav_hover_a");
			$("#nav_6 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_6").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_6").removeClass("nav_hover_a");
			$("#nav_6 span:first-child").css({"background-position-y": "0px"});
			$("#nav_6").parent().css({"background": "#fafafa"});
		}
		if(top<15916&&top>=15092){
			$("#nav_7").addClass("nav_hover_a");
			$("#nav_7 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_7").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_7").removeClass("nav_hover_a");
			$("#nav_7 span:first-child").css({"background-position-y": "0px"});
			$("#nav_7").parent().css({"background": "#fafafa"});
		}
		if(top<18286.4&&top>=15916){
			$("#nav_8").addClass("nav_hover_a");
			$("#nav_8 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_8").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_8").removeClass("nav_hover_a");
			$("#nav_8 span:first-child").css({"background-position-y": "0px"});
			$("#nav_8").parent().css({"background": "#fafafa"});
		}
		if(top<20544&&top>=18286.4){
			$("#nav_9").addClass("nav_hover_a");
			$("#nav_9 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_9").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_9").removeClass("nav_hover_a");
			$("#nav_9 span:first-child").css({"background-position-y": "0px"});
			$("#nav_9").parent().css({"background": "#fafafa"});
		}
		if(top<22268&&top>=20544){
			$("#nav_10").addClass("nav_hover_a");
			$("#nav_10 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_10").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_10").removeClass("nav_hover_a");
			$("#nav_10 span:first-child").css({"background-position-y": "0px"});
			$("#nav_10").parent().css({"background": "#fafafa"});
		}
		if(top<24047&&top>=22268){
			$("#nav_11").addClass("nav_hover_a");
			$("#nav_11 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_11").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_11").removeClass("nav_hover_a");
			$("#nav_11 span:first-child").css({"background-position-y": "0px"});
			$("#nav_11").parent().css({"background": "#fafafa"});
		}
		if(top>=24047){
			$("#nav_12").addClass("nav_hover_a");
			$("#nav_12 span:first-child").css({"background-position-y": "-50px"});
			$("#nav_12").parent().css({"background": "#ed155b"});
			
		}else{
			$("#nav_12").removeClass("nav_hover_a");
			$("#nav_12 span:first-child").css({"background-position-y": "0px"});
			$("#nav_12").parent().css({"background": "#fafafa"});
		}
	})
	
//	$(".header_bottom_nav_ul li").click(function(){
//		var index=$(this).index();
//		if(index==0){
//			sTop=600;
//		}
//	})
	$("a[name='section_div_1']").css({"position":"absolute","top":"600px"});
	$("a[name='section_div_2']").css({"position":"absolute","top":"2248px"});
	$("a[name='section_div_3']").css({"position":"absolute","top":"4974px"});
	$("a[name='section_div_4']").css({"position":"absolute","top":"11509.5px"});
	$("a[name='section_div_5']").css({"position":"absolute","top":"12780px"});
	$("a[name='section_div_6']").css({"position":"absolute","top":"13592.7px"});
	$("a[name='section_div_7']").css({"position":"absolute","top":"15093.5px"});
	$("a[name='section_div_8']").css({"position":"absolute","top":"15917.5px"});
	$("a[name='section_div_9']").css({"position":"absolute","top":"18286.4px"});
	$("a[name='section_div_10']").css({"position":"absolute","top":"20545.6px"});
	$("a[name='section_div_11']").css({"position":"absolute","top":"22269.6px"});
	$("a[name='section_div_12']").css({"position":"absolute","top":"24048px"});
	
	
	
	
})

