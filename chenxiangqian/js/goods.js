







//计算组合价格
var pric =document.getElementsByName("recomd_group");

for(var i=0;i<pric.length;i++){
	pric[i].onchange=function(){
		var sum=169;
		if(pric[0].checked){
			sum+=119;
		}
		if(pric[1].checked){
			sum+=65;
		}
		if(pric[2].checked){
			sum+=79;
		}
		document.getElementById("money").innerHTML=sum;
	}
}






/*存在bug*/
/*添加click  ，当一个元素被点击，其父元素下的所有元素dispaly none  this为block */
 var form1=document.getElementsByClassName("cli")
 for(var i=0;i<form1.length;i++){
 	
 	for(var j=0;j<form1[i].children.length-1;j++){
 		form1[i].children[j].onclick=function myfun(){
 		var coll=this.parentNode.children;
 		for(var k=0;k<coll.length-1;k++){
 			coll[k].style.display="none";
 			
 		}
 		
 		this.style.display="block";
 		
 		}
 		
 		
 	}
 }
/*图片自动跳转 author 陈向前 2017——9——18*/

/*记录索引*/
var flag=true;//标号，鼠标悬停的时候值为false
setInterval("myfunction()",3000);
var pic=document.getElementById("pictures").children;
var count=0;

function myfunction(){
	if(flag){
	if(count<pic.length){
		for(var m=0;m<pic.length;m++){
			pic[m].style.display="none";
		}
		pic[count].style.display="block";
		count++;
	}else{
		count=0;
	}
	}
}
/*鼠标悬停 author 陈向前 2017——9——18*/
//功能可以实现。但是“不灵敏”
var icon=document.getElementById("icon").children;

var temp=0;
for(var ss=0;ss<icon.length;ss++){
	icon[ss].onmousemove=function(){
		flag=false;
		temp=parseInt(this.id);
		
		for(var g=0;g<pic.length;g++){
			if(g!=temp){
				pic[i].style.display="none";
			}
			else{
				pic[temp].style.display="block";
			}
			}
		}
		
	icon[ss].onmouseout=function(){
		flag=true;
	}
	
}
/*一下是jquery*/
$(function(){
	$(window).scroll(function(){
		var height=parseFloat($(".detail_tab").offset().top)-parseFloat($(document).scrollTop());
		
		if(height<0){
			$("#hiden_fixed").show();
		}else{
			$("#hiden_fixed").hide();
		}
	});
	
	
	
})
//无聊的波波波波宝宝

$(".dire_left").click(function(){
	
	var lef=parseInt($(".D_recent_right .tmd").css("left"));

	if(lef>-700){
		$(".D_recent_right .tmd").css({
		"left":"-=680px"
	});
	}
	if(lef<-1200){
		$(".D_recent_right .tmd").css({
		"left": "0"
	});
	}
	
	
	
});
$(".dire_right").click(function(){
	var lef=parseInt($(".tmd").css("left"));
	if(lef<0){
		
		$(".tmd").css("left","+=680px");
	}
	if(lef==0){
		$(".tmd").css("left","-1360px")
	}
});
//五毛特效
$(".tx").hover(function(){
	$(this).addClass("togclass");
	$(this).prev("p").animate({
		"opacity":"1",
		"left":"-92px"
	},"slow");
},function(){
	$(this).removeClass("togclass");
	$(this).prev("p").animate({
		"opacity":"0",
		"left":"-152px"
	});
})
	
//侧边

				$(".aside i:eq(0)").hover(function(){
					$(this).toggleClass("ani");
						$(this).find("s").show();
				},function(){
					$(this).toggleClass("ani");
					$(this).find("s").hide();
				});
				$(".aside i:eq(0)").find("span").click(function(){
					$(this).parent().parent().hide();
				});
				
//后续添加
$(function(){
	$.cookie("GOODS_4",0);
	$(".addshopcart").click(function(){
		$.cookie("GOODS_4",parseInt($.cookie("GOODS_4"))+1);
		alert($.cookie("GOODS_4"));
	})
	$(".goshopcart").click(function(){
		location="../lichuanrui/shoppingcart.html";
	})
	
	
})












