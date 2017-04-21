var add=document.getElementById('add');
var del=document.getElementById('remove');
var divs=document.getElementsByTagName('div');
/*\
|*| targetEle点击元素
|*| childd存储targetEle子元素
|*| next为targetEle的兄弟元素
\*/
var targetEle="";
var childd=[];
var next;

/*\
|*| 浏览器事件兼容
\*/
function addEventHandler(ele,event,handler){
    if (ele.addEventListener) {
        ele.addEventListener(event,handler,false);
    }else if(ele.attachEvent){
        ele.attachEvent("on"+event,handler);
    }else{
        ele["on"+event]=handler;
    }
}

/*\
|*| 只能选中NodeName为DIV的元素
|*| 将上一次targetEle背景色设为白色
|*| 将当前targetEle背景色设为红色
\*/
function selectEle(event) {
    if(event.target.nodeName.toUpperCase()!="DIV"){
        return;
    }
    if(targetEle!=""){
        targetEle.style.backgroundColor="white";
    }
    targetEle=event.target;
    targetEle.style.backgroundColor="red";
    saveChild(targetEle);
}

/*\
|*| 在当前节点下增加子节点
|*| 获取value,创建div节点 ,增加节点
\*/
function addNode(){
    if(targetEle==""){
        alert("请选择一个节点再添加");
        return ;
    }
    var value=document.getElementById('value').value;
    if(value==""){
        alert("请输入要添加的节点的值,若要添加空值请输入空格");
        return ;
    }
    var newDiv=document.createElement("div");
    var textNode=document.createTextNode(value);
    newDiv.appendChild(textNode);
    targetEle.appendChild(newDiv);
}

/*\
|*| 保存传入的节点的子节点
|*| 将childd初始化，保证childd数组为空
\*/
function saveChild(node){
    childd=[];
    if(targetEle.nextSibling){
        next=targetEle.nextSibling;
    };
    if(node.hasChildNodes){
        for(var i=0;i<node.childNodes.length;i++){
            if(node.childNodes[i].nodeType=="1"){
                childd.push(node.childNodes[i]);
            }
        }
    }
}

/*\
 |*| 移除targetEle
 |*| parent保存targetEle节点的父节点
 |*| childd中节点保存到parent中字节点
 \*/
function removeNode(){
    if (targetEle!="") {
        var parent=targetEle.parentNode;
        parent.removeChild(targetEle);
        while(childd.length){
            parent.insertBefore(childd[0],next);
            childd.shift();
        }
        targetEle="";
    }
}

function init(){
    for(var i=0;i<divs.length;i++){
        addEventHandler(divs[i],"click",selectEle);
    }
    addEventHandler(remove,"click",removeNode);
    addEventHandler(add,"click",addNode);
}

init();