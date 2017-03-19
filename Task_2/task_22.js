var DepthFS=document.getElementById('DepthFS');
var BreadthFS=document.getElementById('BreadthFS');
var container=document.getElementById('container');
var renderArr=[];

//跨浏览器绑定事件
function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler);
	}else{
		ele["on"+evnet]=handler;
	}
}

//判断当前节点是否有子节点
function hasChild(node){
	var arr=[];
	for (var i = 0; i < node.childNodes.length; i++) {
		if(node.childNodes[i].nodeType==1){
			if(node.childNodes[i].tagName.toLowerCase()=="div"){
				arr.push(i);
			}
		}
	}
	return arr;
}

//深度优先遍历
function DFS(node){
	renderArr.push(node);
	var arrLen=hasChild(node);
	if(arrLen.length==0){return;}
	for (var i = 0; i < arrLen.length; i++) {
		DFS(node.childNodes[arrLen[i]]);
	}
}

//广度优先遍历
function BFS(node){
	var arrLen=hasChild(node);
	if(arrLen.length==0){return;}
	for (var i = 0; i < arrLen.length; i++) {
		renderArr.push(node.childNodes[arrLen[i]]);
		setTimeout(BFS,1,node.childNodes[arrLen[i]]);
		//BFS(node.childNodes[arrLen[i]]);
	}
}

// //使用兼容性代码，向回调函数传递一个参数，还可以兼容IE9及以前的版本
// if (document.all && !window.setTimeout.isPolyfill) {
//   var __nativeST__ = window.setTimeout;
//   window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
//     var aArgs = Array.prototype.slice.call(arguments, 2);
//     return __nativeST__(vCallback instanceof Function ? function () {
//       vCallback.apply(null, aArgs);
//     } : vCallback, nDelay);
//   };
//   window.setTimeout.isPolyfill = true;
// }

//渲染Div
function renderData(color){
	DepthFS.setAttribute("disabled",true);
	BreadthFS.setAttribute("disabled",true);
	var i=0;
	function changeColor(){
		renderArr[i].style.background=color;
		i++;
		if(i>=renderArr.length){DepthFS.removeAttribute('disabled');BreadthFS.removeAttribute('disabled');}
		if(i<renderArr.length){setTimeout(changeColor,400);}
	}
	changeColor();
}

//执行函数
function executeDepth(){
	renderArr=[];
	DFS(container);
	renderData("red");
	setTimeout(renderData,400,"white");
}
function executeBreadth(){
	renderArr=[container];
	BFS(container);
	renderData('blue');	
	setTimeout(renderData,400,"white");
}


//初始化事件
function init(){
	addEventHandler(DepthFS,"click",executeDepth);
	addEventHandler(BreadthFS,'click',executeBreadth);
}

init();