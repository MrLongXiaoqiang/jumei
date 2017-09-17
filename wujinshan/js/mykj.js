//1、显示当前时间
function realSysTime(showtime) {
	var showtime = document.getElementById('showtime');
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDay();
	var hour = now.getHours();
	var minu = now.getMinutes();
	var second = now.getSeconds();
	var date = now.getDate();
	month += 1;
	var arr_week = new Array("日", "一", "二", "三", "四", "五", "六");
	var week = arr_week[day];
	var time = year + "年" + month + "月" + date + "日\t星期" + week + "\t" + hour + ":" + minu + ":" + second;
	showtime.innerHTML = "当前时间：" + time;
}
window.onload = function() {
	window.setInterval("realSysTime(showtime)", 1000);
}


//2、遍历所有节点
var elementlist="";
function getElement(node){
	var total=0;
	if(node.nodeType==1){
		total+=1;
		elementlist+=node.nodeName+"、";
	}
	var childlist=node.childNodes;
	for(var m=node.firstChild ;m!=null;m=m.nextSibling){
		total+=getElement(m);
	}
	return total;
}

function show(){
	var number=getElement(document);
	elementlist=elementlist.substring(0,elementlist.length-1);
	alert("节点数："+number);
	alert(elementlist);
}

//3、清除value
function clearvalue(){
				var name1 = document.getElementsByName("name1")[0];
				name1.value="";
			}
