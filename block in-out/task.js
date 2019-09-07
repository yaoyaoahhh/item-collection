
var text=document.getElementById('text-in');
var leftIn=document.getElementById('left-in'),
    rightIn=document.getElementById('right-in'),
    leftOut=document.getElementById('left-out'),
    rightOut=document.getElementById('right-out'),
    ul=document.getElementById('container');
//跨浏览器事件处理器
    var addEventHandler = function(ele,event,handler){
    if (ele.addEventListerner){
        ele.addEventListerner(event,handler,false);
    }
    else if(ele.attachEvent){
        ele.attachEvent('on'+event,handler);
    }
    else{
        ele['on'+event]=handler;
    }
};
addEventHandler(leftIn,'click',function(){
    if(text.value.length===0){
        alert('输入为空！');
        return false;
    }
    else if(!(/^[0-9]+$/).test(text.value)){
       alert('请输入数字！');
       return false;
    }
    else{
        var newElement=document.createElement('li');
        newElement.innerHTML=text.value;
        ul.insertBefore(newElement,ul.firstChild);
        
        text.value=null;
    }
    
});
addEventHandler(rightIn,'click',function(){
    if(text.length===0){
        alert('输入为空！');
        return false;
    }
    else if(!(/^[0-9]+$/).test(text.value)){
        alert('请输入数字！');
        return false;
    }
    else{
        var newElement=document.createElement('li');
        newElement.innerHTML=text.value;
        ul.appendChild(newElement);
        text.value=null;
    }
});
addEventHandler(leftOut,'click',function(){
    if(ul.hasChildNodes){
        alert('删除数字：'+ ul.firstChild.innerHTML);
        ul.removeChild(ul.firstChild);
    }
    else{
        alert('队列为空，无法删除！');
        return 0;
    }
});
addEventHandler(rightOut,'click',function(){
    if(ul.hasChildNodes){
        alert('删除数字：'+ ul.lastChild.innerHTML);
        ul.removeChild(ul.lastChild);
    }
    else{
        alert('队列为空，无法删除！');
        return 0;
    }
});