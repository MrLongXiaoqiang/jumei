$(function(){
	//预置账号
	
	$.cookie("UNAME1","宋雷娟",{"path":"/"});
	$.cookie("UNAME2","石涛",{"path":"/"});
	$.cookie("UNAME3","张奔",{"path":"/"});
	$.cookie("UNAME4","张帅",{"path":"/"});
	$.cookie("UNAME5","陈向前",{"path":"/"});
	$.cookie("UNAME6","李传瑞",{"path":"/"});
	$.cookie("UNAME7","吴金山",{"path":"/"});
	$.cookie("UNAME8","徐磊",{"path":"/"});
	$.cookie("UNAME9","杨辉",{"path":"/"});
	
	
	//预置密码
	$.cookie("PWD1","songleijuan",{"path":"/"});
	$.cookie("PWD2","shitao",{"path":"/"});
	$.cookie("PWD3","zhangben",{"path":"/"});
	$.cookie("PWD4","zhangshuai",{"path":"/"});
	$.cookie("PWD5","chenxiangqian",{"path":"/"});
	$.cookie("PWD6","lichuanrui",{"path":"/"});
	$.cookie("PWD7","wujinshan",{"path":"/"});
	$.cookie("PWD8","xulei",{"path":"/"});
	$.cookie("PWD9","yanghui",{"path":"/"});
	
	//验证登录
	$("#login_button").click(function(){
		var uName=$("#uName").val();
		var pwd=$("#pwd").val();
		login(uName,pwd);
	})
	
})

function login(uName,pwd){
	for (var i=1;i<=10;i++) {
		var cookieUName="UNAME"+i;
		var cookiePwd="PWD"+i;	
		if($.cookie(cookieUName)==uName){
			if($.cookie(cookiePwd)==pwd){
				$.cookie("NOW_UNAME",uName,{"path":"/"});
				location="../index.html";
				return true;
			}
		}
	}
	alert("用户名或密码不正确");
	return false;
}
