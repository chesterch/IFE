var add=document.getElementById('add');
var del=document.getElementById('delete');

function addEventHandler(ele,event,handler){
	if (ele.addEventListener) {
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+event,handler);
	}else{
		ele["on"+event]=handler;
	}
}

function selectEle() {
	
}

function init(){
	addEventHandler("click",selectEle);
}

init();