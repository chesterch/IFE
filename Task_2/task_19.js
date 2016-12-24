var inLeft=document.getElementById('inLeft'),
	inRight=document.getElementById('inRight'),
	outLeft=document.getElementById('outLeft'),
	outRight=document.getElementById('outRight'),
	render=document.getElementById('renderData'),
	HSort=document.getElementById('HSort');

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
var data=[78,99,18,34,10,23,56,42,65,50];
var reg=new RegExp(/^[0-9]+$/);

//左侧入
function btn_inLeft(){
	//获取输入的值
	var inputNum=document.getElementById('inputNum').value;
	//去除数字前的0，首尾两端的空格
	inputNum=inputNum.replace(/(\b(0+)|^\s*|\s*$)/gi,"");
	if (reg.test(inputNum)) {
		//判断字符是否大于10小于100
		if(inputNum>=10&&inputNum<=100){
			if(data.length<=60){
				data.unshift(inputNum);
				renderData();
			}else{
				alert("输入的元素已经达到60个!");
			}
		}else{
			alert("请输入10至100的数字!");
		}
	}else{
		alert("请输入正确的数字!");
	}
}

//右侧入
function btn_inRight(){
	//获取输入的值
	var inputNum=document.getElementById('inputNum').value;
	//去除数字前的0，首尾两端的空格
	inputNum=inputNum.replace(/(\b(0+)|^\s*|\s*$)/gi,"");
	if (reg.test(inputNum)) {
		//判断字符是否大于10小于100
		if(inputNum>=10&&inputNum<=100){
			if(data.length<=60){
				data.push(inputNum);
				renderData();
			}else{
				alert("输入的元素已经达到60个!")
			}
		}else{
			alert("请输入10至100的数字!");
		}
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

//点击删除
//先移除点击的数字，然后再遍历删除后的DIV
function span_del(e){
	if (e.target.className=="showNum") {
		var del_height=window.getComputedStyle(e.target,null).getPropertyValue("height");
		del_height=parseInt(del_height);
		alert("删除的数字是:"+del_height);
		e.target.parentNode.removeChild(e.target);
		delete e.target;
		iterator();
	}
}


//遍历删除后的DIV，并保存到data数组中。最后删除data最后一项
function iterator(){
	var spans=document.getElementsByTagName('span');
	for(var i=0;i<spans.length;i++){
		var currentHeight=window.getComputedStyle(spans[i],null).getPropertyValue("height");
			currentHeight=parseInt(currentHeight);
		data[i]=currentHeight;
	}
	data.pop();
	renderData();
}

//渲染数组
function renderData(){
	var text='';
	for(var item in data){
		text+='<span class="showNum" style="height:'+data[item]+'px;"></span>';
	}
	render.innerHTML=text;
}

function HeapSort(a){
	var len=a.length;
	function swap(a,i,j){
		var temp=a[i];
		a[i]=a[j];
		a[j]=temp;
	}

	function HeapAdjust(a,start,end){
		//建立父节点和子节点的指标
		var parent=start;
		var child=parent*2+1;
		//若子节点指标超出范围直接跳出函数
		if(child>=end){
			return;
		}
		//比较两个子节点，选择大的
		if(child+1<end&&a[child]<a[child+1]){
			child++;
		}
		//比较子节点和父节点，若父节点小于子节点，则交换两个节点内容，再继续让子节点和子孙节点比较	
		if(a[parent]<a[child]){
			swap(a,parent,child);
			HeapAdjust(a,child,end);
		}

	}

	//初始化，从最后一个父节点开始调整
	for(var i=Math.floor(len/2)-1;i>=0;i--){
		HeapAdjust(a,i,len);
	}
	//先将第一个元素和最后一个元素交换，再重新调整，直到排序完成
	for(var i=len-1;i>0;i--){
		swap(a,0,i);
		HeapAdjust(a,0,i);
	}
	//返回派好的元素数组
	return a;
}

function showSort(){
	if (data.length<=0) {return;}
	else{
		HeapSort(data);
		renderData();
	}
}

// 模拟的sleep()函数
// function sleep(d){
// 	for(var t=Date.now();Date.now()-t<d;);
// }

//初始化函数
function init(){
	renderData();
	addEventHandler(inLeft,'click',btn_inLeft);
	addEventHandler(inRight,'click',btn_inRight);
	addEventHandler(outLeft,'click',btn_outLeft);
	addEventHandler(outRight,'click',btn_outRight);
	addEventHandler(render,'click',span_del);
	addEventHandler(HSort,'click',showSort);
}

init();
