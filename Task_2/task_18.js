var inLeft=document.getElementById('inLeft'),
	inRight=document.getElementById('inRight'),
	outLeft=document.getElementById('outLeft'),
	outRight=document.getElementById('outRight'),
	render=document.getElementById('renderData');

//跨浏览器事件绑定
function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler);
	}else{
		ele["on"+event]=handler;
	}
}

//数组data用来存储数据,reg正则表达式判断是否是纯数字
var data=[];
var reg=new RegExp(/^[0-9]+$/);

//左侧入
function btn_inLeft(){
	var inputNum=document.getElementById('inputNum').value;
	if (reg.test(inputNum)) {
		data.unshift(inputNum);
		renderData();
	}else{
		alert("请输入正确的数字!");
	}
}

//右侧入
function btn_inRight(){
	var inputNum=document.getElementById('inputNum').value;
	if (reg.test(inputNum)) {
		data.push(inputNum);
		renderData();
	}else{
		alert("请输入正确的数字!");
	}
}

//左侧出
//判断数组的长度，若不为0，则进行操作，否则不操作
function btn_outLeft(){
	if(data.length!=0){
		var outNum=data.shift();
		alert("删除的数字是:"+outNum);
		renderData();
	}else{
		return;
	}
}

//右侧出
//判断数组的长度，若不为0，则进行操作，否则不操作
function btn_outRight(){
	if(data.length!=0){
		var outNum=data.pop();
		alert("删除的数字是:"+outNum);
		renderData();
	}else{
		return;
	}
}

//渲染数组
function renderData(){
	var text='';
	for(var item in data){
		text+='<div class="showNum">'+data[item]+'</div>';
	}
	render.innerHTML=text;
}

//初始化函数
function init(){
	addEventHandler(inLeft,'click',btn_inLeft);
	addEventHandler(inRight,'click',btn_inRight);
	addEventHandler(outLeft,'click',btn_outLeft);
	addEventHandler(outRight,'click',btn_outRight);
}

init();
