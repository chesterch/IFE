var DepthFS=document.getElementById('DepthFS');
var BreadthFS=document.getElementById('BreadthFS');
var container=document.getElementById('container');

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
	var num=0;
	for(var len in node.childNodes){
		if(node.childNodes[len].nodeType==1){
			if(node.childNodes[len].tagName.toLowerCase()=="div") num++; 
		}
	}
	return num;
}

// //深度优先遍历
// function DFS(node){
// 		renderData(node);
// 		if(!hasChild(node)){return;}
// 		for (var i = 0; i < node.childNodes.length; i++) {
// 			if(node.childNodes[i].nodeType==1){
// 				if (node.childNodes[i].tagName.toLowerCase()=="div") {
// 					console.log(node.childNodes[i]);
// 					setTimeout(DFS,500,node.childNodes[i]);
// 				}
// 			}
// 		}
// }

//深度优先遍历
function DFS(node){
		renderData(node);
		if(!hasChild(node)){return;}
		function change(){
			var num=hasChild(node);
			var i=0;
			if(i<num){
			if(node.childNodes[i].nodeType==1){
				if (node.childNodes[i].tagName.toLowerCase()=="div") {
					console.log(node.childNodes[i]);
					//setTimeout(DFS,500,node.childNodes[i]);
					setTime(change,500);
				}
			}
			i++;
			}	
		}
		change();
}

//使用兼容性代码，向回调函数传递一个参数，还可以兼容IE9及以前的版本
if (document.all && !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

//渲染Div
function renderData(ele){
	ele.style.background="red";
}

//执行函数
function executeDepth(){
	DFS(container);
}

//初始化事件
function init(){
	addEventHandler(DepthFS,"click",executeDepth);
}

init();