//存储用户输入的空气指数数据	
var aqiData={};

//从用户输入中获取数据，向aqiData中添加一条数据
//然后渲染aqi-list数据，添加新添的数据
function addAqiData() {
	var city=document.getElementById('aqi-city-input');
	var value=document.getElementById('aqi-value-input');
	console.log(city.value);
}

//渲染aqi-table表格
function renderAqiList() {
	
}

//点击add-btn时的处理逻辑
//获取用户输入，更新数据，并进行页面呈现的更新
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

//点击各个删除按钮时处理逻辑
//获取哪个城市数据被删，删除数据，更新表格内容
function delBtnHandle() {
	
	renderAqiList();
}

function init() {
	//给add-btn绑定一个点击事件，点击时触发addHandle函数
	var addbtn=document.getElementById('add-btn');
	addbtn.onclick=function(){
		addBtnHandle();
	}
	//给aqi-table中所有删除按钮绑定事件，触发delBtnHandle函数
}

init();
