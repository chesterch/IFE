var inputText=document.getElementById('inputText'),
	inputBtn=document.getElementById('inputBtn'),
	searchText=document.getElementById('searchText'),
	searchBtn=document.getElementById('searchBtn'),
	renderResult=document.getElementById('renderResult'),
	arr=[];

function addEventHandler(ele,event,handler){
	if(ele.addEventListener){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent('on'+event,handler);
	}else{
		ele['on'+event]=handler;
	}
}

function cutString(inputString){
	var reg=/[\s\,\，\、\.\。\!\！\\\;\t\n]+/;
	arr=inputString.split(reg);
	if (arr[arr.length-1]=="") {arr.pop();}
	for (item in arr){
		renderData(arr);
	}
}

function findData(searchString){
	renderData(arr);
	var spans=document.getElementsByTagName('span');
	for (item in arr){
		var reg=new RegExp(searchString,"g");
		if (reg.test(arr[item])) {
			spans[item].style="background:#CA2329;";
		}
	}
}

function renderData(arr){
	var text='';
	for (item in arr){
		text+='<span>'+arr[item]+'</span>';
	}
	renderResult.innerHTML=text;
}

function search(){
	var searchString=searchText.value;
	if (searchString=='') {
		alert("请输入要搜索的数据");
	}else{
		findData(searchString);
	}
}

function cut(){
	var inputString=inputText.value;
	if (inputString=='') {
		alert("请输入数据");
	}
	cutString(inputString);
}

function init(){
	addEventHandler(inputBtn,'click',cut);
	addEventHandler(searchBtn,'click',search);
}

init();
