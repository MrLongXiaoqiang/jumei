$(function(){
	$("#register_button").click(function(){
		var uName=$("#uTel").val()
		var message=$("#message").val()
		var pwd=$("#pwd").val()
		var repwd=$("#repwd").val()
		register(uName,message,pwd,repwd);
	})
})

function register(uName,message,pwd,repwd){
	if(pwd==repwd){
		$.cookie("UNAME10",uName,{"path":"/"});
		$.cookie("PWD10",pwd,{"path":"/"});
		alert("注册成功<br/>点击确定进入登录页面");
		location="login.html";
	}else{
		alert("两次密码输入不一致！")
		return false;
	}
	
	
	
}
