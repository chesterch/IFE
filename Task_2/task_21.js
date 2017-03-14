var preOT=document.getElementById('preOT');
var inOT=document.getElementById('inOT');
var postOT=document.getElementById('postOT');
var arr=[];

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

//将各个div转化为链式结构
function convert(){
	var container=document.getElementById('container');
	var item_1=document.getElementsByClassName('item_1');
	console.log(item_1);
}

//前序遍历
function preOrderTraversal(node){

}

//中序遍历
function inOrderTraversal(){

}

//后序遍历
function postOrderTraversal(){

}

//初始化函数
function init(){
	convert();
	addEventHandler(preOT,'click',preOrderTraversal);
}

init();