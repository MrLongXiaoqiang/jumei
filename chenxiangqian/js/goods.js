
















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
