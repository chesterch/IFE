//存储用户输入的空气指数数据	
var aqiData={};

//从用户输入中获取数据，向aqiData中添加一条数据
//然后渲染aqi-list数据，添加新添的数据
function addAqiData() {
	var city=document.getElementById('aqi-city-input').value;
	var value=document.getElementById('aqi-value-input').value;
	var reg=new RegExp("^[a-zA-Z\u4e00-\u9fa5]+$");
	var reg2=new RegExp("^[0-9]+$");
	if(reg.test(city)&&reg2.test(value)){
		aqiData[city]=value;	
	}else{
		alert("请输入符合的数据")
	}
}

//渲染aqi-table表格
function renderAqiList() {
	var table=document.getElementById('table');
	var rows=table.rows.length;
	for (var i = 0; i < rows; i++) {
		table.deleteRow(i);
		rows=rows-1;
		i=i-1;
	}
	for(var x in aqiData){
		var tr=document.createElement('tr');
		var td1=document.createElement('td');
		var td2=document.createElement('td');
		var td3=document.createElement('td');
		var txt1=document.createTextNode(x);
		var txt2=document.createTextNode(aqiData[x]);
		var button=document.createElement('button');
		var txt3=document.createTextNode('删除');
		tr.appendChild(td1);
		td1.appendChild(txt1);
		tr.appendChild(td2);
		td2.appendChild(txt2);
		tr.appendChild(td3);
		button.appendChild(txt3);
		td3.appendChild(button);
		table.appendChild(tr);
	}
}

//点击add-btn时的处理逻辑
//获取用户输入，更新数据，并进行页面呈现的更新
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

//点击各个删除按钮时处理逻辑
//获取哪个城市数据被删，删除数据，更新表格内容
function delBtnHandle(target) {
	var cityName=target.parentElement.parentElement.firstChild.innerHTML;
	delete aqiData[cityName];
	renderAqiList();
}

function init() {
	//给add-btn绑定一个点击事件，点击时触发addHandle函数
	var addbtn=document.getElementById('add-btn');
	addbtn.onclick=function(){
		addBtnHandle();
	}
	//给aqi-table中所有删除按钮绑定事件，触发delBtnHandle函数
	var table=document.getElementById('table');
	table.onclick=function () {
		if (event.target.nodeName.toLowerCase()==='button') {
			 delBtnHandle(event.target);
		}
	}
}

init();
