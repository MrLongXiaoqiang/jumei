
	//header_top
	$(function(){
	$(".you").hover(function(){
	
		$(this).find(".arrow").addClass("arrowtrans");
		
		$(this).find(".hidden_kid").slideDown();
			$(this).css("background","white");
		
		
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find(".arrow").removeClass("arrowtrans");
		$(this).find(".hidden_kid").slideUp();
	});
	//nav
	
	$(".nav_head").hover(function(){
		$(this).children("s").toggleClass("arrowtrans");
		$(this).css("opacity","0.7");
		$(this).find(".nav_hid").slideDown();
	},function(){
		$(this).children("s").toggleClass("arrowtrans");
		$(this).css("opacity","1");
		$(this).find(".nav_hid").slideUp();
	})
	
	
	//无聊☞放大镜
	$(".img_contenner1").mousemove(function(){
		var lx=$(this).offset().left;//图片坐标x
		var ly=$(this).offset().top;//图片坐标y
		var mx=event.pageX;//鼠标坐标
		var my=event.pageY;//鼠标纵坐标
		var px=mx-lx-90;
		var py=my-ly-90;
		if(px>0&&px<185&&py>0&&py<320){
			$(this).find(".mouso").css({
			"display":"block",
			"left":px,
			"top":py
		});
		$(".big_one").show();
		$(".big_one img").css({
			"left":-(2*px),
			"top":-(2*py)
		})}
		
		
	})
	$(".img_contenner1").mouseleave(function(){
		$(this).find(".mouso").hide();
		$(".big_one").hide();
	});
	
	//滚动的火球
	$(window).scroll(function(){
//		var ly=parseFloat($(".magic_choice").offset().top);
		var sr=parseFloat($(document).scrollTop());
//		var relat=parseFloat($(".magic_choice").offset().top)-parseFloat($(document).scrollTop());
		if(sr>886){
			
			$(".magic_choice").css({
				"position":"fixed",
				"top":"0",
				"z-index":"999",
				"margin-left":"-200px",
				"width":"1275px"
			});
			$(".magic_choice .magic_hid").css("display","inline-block");
			$(".magic_choice ul").animate({
				marginLeft:"200px"
			})
		}else{
			
			$(".magic_choice").css({
				"position":"relative",
				
				"margin-left":"0",
				"width":"960px"
			});
				$(".magic_choice ul").animate({
				marginLeft:"0px"
			})
			$(".magic_choice .magic_hid").css("display","none");
		}
		
	});
	
	//自动评价区
	$(":radio").change(function(){//对象数组更好点
		var username=["小**莉亚","仓**空","波**结衣","吉**布","北**子"]
		var dates=["购买于两周前","购买与三周前","日期过了太久","购买于昨天","购买于一年前"]
		var logs=["http://p0.jmstatic.com/product_report/newKoubei/img/images/1/v_1.gif","http://p0.jmstatic.com/product_report/newKoubei/img/images/1/v_2.gif","http://p0.jmstatic.com/product_report/newKoubei/img/images/1/v_3.gif","http://p0.jmstatic.com/product_report/newKoubei/img/images/1/v_3.gif","http://p0.jmstatic.com/product_report/newKoubei/img/images/1/v_3.gif",]
		var words=new Array();
		words[0]=["宝贝很好，赞，发货也很快","和图片上一样，很喜欢","买给❥(^_-)朋友的，朋友说很好吃","还是聚美的商品好，下次还来买","好评"]
		words[1]=["还(^_-)行，就是有点少，不信问石老师","一般般把","快递有点慢","模样有点差","店主不是妹子"]
		words[2]=["差评*999","别问我为啥(^_-)，走失差评","包装很烂","不好吃，而且很难看","快递很慢"]
		var index=$(":checked").prop("id");
		$(":checked").next("label").css("color","red");
			if(index=="all"){//全部评价
				$(".pjnr").empty();
			for(var i=0;i<10;i++){
			var tem=parseInt(Math.random()*3);
			var rand= parseInt(Math.random()*5);//随机序号
			var ht=$("<div class='comments'><p class='use_his'><span class='username'>"+username[rand]+"<s><img src='"+logs[rand]+"'/></s></span><span class='date'>"+dates[rand]+"</span> </p><p class='coment_words'>"+words[tem][rand]+"</p><p class='by_type'>型号:1388g/>美食汇聚大礼包</p></div>")
			$(".pjnr").append(ht);
			}
		}
		if(index=="good"){//好评
			//清除记录￥
			$(".pjnr").empty();
			for(var i=0;i<10;i++){
			var rand= parseInt(Math.random()*5);//随机序号
			var ht=$("<div class='comments'><p class='use_his'><span class='username'>"+username[rand]+"<s></s></span><span class='date'>"+dates[rand]+"</span> </p><p class='coment_words'>"+words[0][rand]+"</p><p class='by_type'>型号:1388g/>美食汇聚大礼包</p></div>")
			$(".pjnr").append(ht);
					}
		
		}
		if(index=="medium"){//好评
			//清除记录￥
			$(".pjnr").empty();
			for(var i=0;i<10;i++){
			var rand= parseInt(Math.random()*5);//随机序号
			var ht=$("<div class='comments'><p class='use_his'><span class='username'>"+username[rand]+"<s></s></span><span class='date'>"+dates[rand]+"</span> </p><p class='coment_words'>"+words[1][rand]+"</p><p class='by_type'>型号:1388g/>美食汇聚大礼包</p></div>")
			$(".pjnr").append(ht);
				}
		}
		if(index=="bad"){//差评
			//清除记录￥
			$(".pjnr").empty();
			for(var i=0;i<10;i++){
			var rand= parseInt(Math.random()*5);//随机序号
			var ht=$("<div class='comments'><p class='use_his'><span class='username'>"+username[rand]+"<s></s></span><span class='date'>"+dates[rand]+"</span> </p><p class='coment_words'>"+words[2][rand]+"</p><p class='by_type'>型号:1388g/>美食汇聚大礼包</p></div>")
			$(".pjnr").append(ht);
					}
		
		}
	});
	//trigger 神奇的一匹
	$("#all").prop("checked","checked");
	$(":radio").trigger("change");
	
	//翻页
	$(".change_page").click(function(){
	$(this).children("li").removeClass("redcolor");
	var inde=	$(event.target).index();
	if(inde!=-1){
		$(event.target).addClass("redcolor");
		$(":radio").trigger("change");//很奇怪但是很实用
	}
		
		
	})
	
	
	
	
	
	//浏览历史 前个页面写的 copy 过来
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
	
	//aside copy 上个页面的代码
	
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
				//都是copy 上个页面的代码
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
	
	
	
	
	
	
	
	
	
	
})
