/*jshint esversion:6*/

let items = document.getElementsByClassName('item'),
    points = document.getElementsByClassName('point'),
    preBtn = document.getElementsByClassName('prebtn'),
    nextBtn = document.getElementsByClassName('nextbtn'),
    pic = document.getElementsByClassName('pic'),
    index = 0,
    time = 0;

//跨浏览器事件处理器


var goNext = function() {
    index++;
    if (index >= items.length) { index = 0; } //到最后一张时点击下一张返回第一张
    goIndex();
};
var goPre = function() {
    index--;
    if (index < 0) { index = items.length - 1; } //第一张的上一张为最后一张index++;
    goIndex();

};

//在调向下一张时清除当前的图片的active类以及actives类
var clearActive = function() {
    for (let i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (let i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
};

//到下一张图片
var goIndex = function() {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point actives';
};

nextBtn[0].addEventListener('click', function() {
    goNext();
    time = 0;
}, false);

preBtn[0].addEventListener('click', function() {
    goPre();
    time = 0;
});

//给每个点绑定事件处理器，获得当前图片的index
for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        let pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
        time = 0;
    }, false);
}
//轮播，定时每隔4秒调到下一张图片
var timer = null;
var autoPlay = function() {
    timer = setInterval(function() {
        time++;
        if (time === 40) {
            goNext();
            time = 0;
        }
    }, 100);
};
autoPlay();
//鼠标悬浮于图片上时停止轮播，清除定时器
pic[0].addEventListener('mouseenter', function() {
    clearInterval(timer);
}, false);
//当鼠标移出图片，不在悬浮其上，继续轮播
pic[0].addEventListener('mouseleave', autoPlay, false);