var preOT=document.getElementById('preOT');
var inOT=document.getElementById('inOT');
var postOT=document.getElementById('postOT');
var arr=[],renderArr=[];

//跨浏览器绑定事件
function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler);
	}else{
		ele["on"+event]=handler;
	}
}

//将各个div转化为顺序结构
function convert(){
	var container=document.getElementById('container');
	var item_1=document.getElementsByClassName('item_1');
	var item_2=document.getElementsByClassName('item_2');
	var item_3=document.getElementsByClassName('item_3');
	arr.push(container);
	for(var i=0;i<item_1.length;i++){arr.push(item_1[i]);}
	for(var i=0;i<item_2.length;i++){arr.push(item_2[i]);}
	for(var i=0;i<item_3.length;i++){arr.push(item_3[i]);}
}

//渲染颜色
function renderDate(color){
	var i=0;
	function changeColor(){
		arr[renderArr[i]-1].style.background=color;
		i++;
		if(i<arr.length){setTimeout(changeColor,500);}
	}
	changeColor();
}

//前序遍历
function preOrderTraversal(index){
	var childL=index*2;
	if(index>arr.length){return;}
	renderArr.push(index);
	preOrderTraversal(childL);
	preOrderTraversal(childL+1);
}

//中序遍历
function inOrderTraversal(index){
	var childL=index*2;
	if(index>arr.length){return;}
	inOrderTraversal(childL);
	renderArr.push(index);
	inOrderTraversal(childL+1);
}

//后序遍历
function postOrderTraversal(index){
	var childL=index*2;
	if(index>arr.length){return;}
	postOrderTraversal(childL);
	postOrderTraversal(childL+1);
	renderArr.push(index);
}

//执行函数
function executePre(){
	renderArr=[];
	preOrderTraversal(1);
	renderDate("red");
}
function executeIn(){
	renderArr=[];
	inOrderTraversal(1);
	renderDate("green");
}
function executePost(){
	renderArr=[];
	postOrderTraversal(1);
	renderDate("white");
}

//初始化函数
function init(){
	convert();
	addEventHandler(preOT,'click',executePre);
	addEventHandler(inOT,'click',executeIn);
	addEventHandler(postOT,'click',executePost);
}

init();