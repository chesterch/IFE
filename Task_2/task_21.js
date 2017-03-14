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

//变换颜色
function changeColor(node){
	node.style.background="red";
}

//前序遍历
function preOrderTraversal(index){
	var childL=index*2;
	if(index>arr.length){return;}
	changeColor(arr[index-1]);
	console.log(index);
	preOrderTraversal(childL);
	preOrderTraversal(childL+1);
}

//中序遍历
function inOrderTraversal(index){
	
}

//后序遍历
function postOrderTraversal(){

}

//执行函数
function executePre(){
	preOrderTraversal(1);
}
function executeIn(){
	inOrderTraversal(1);
}
function executePost(){
	postOrderTraversal(1);
}

//初始化函数
function init(){
	convert();
	addEventHandler(preOT,'click',executePre);
	addEventHandler(inOT,'click',executeIn);
	addEventHandler(postOT,'click',executePost);
}

init();