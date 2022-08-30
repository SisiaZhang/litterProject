import { ajax } from "./ajax";

function genData() {
    ajax({
        url: "data.json",
        method: "GET",
        success: function(data) {
            console.log(data);
            renderDom(data);
            lock = false;
        }
    })
}
genData();

// 图片的真实宽度
var imgWidth = document.querySelector('.item').offsetWidth - 40;

// 渲染DOM结构
function renderDom(data) {
    var oli = document.querySelector('.item');
    data.forEach(item => {
        // 查找最短列，并向最短列添加Dom结构
        var index = getMinLi().minIndex;
        console.log(index);
        var dom = creatImg(item);
        oli[index].appendChild(dom);
    });
}
// 查找最短列，这个没太懂?
function getMinLi() {
    var items = document.querySelector('.item');
    var minIndex = 0;
    var minHeight = items[0].offsetHeight;
    for (var i = 0; i < items.length; i++) {
        if (minHeight > items[i].offsetHeight) {
            minHeight = items[i].offsetHeight;
            minIndex = i;
        }
    }
    return { minIndex, minHeight }
}

function creatImg(data) {
    var odiv = document.createElement('div');
    var img = new Image();
    img.src = data.img;
    img.height = imgWidth * data.height / data.width;
    var oP = document.createElement('p');
    oP.innerText = data.desc;

    odiv.appendChild(img);
    odiv.appendChild(oP);
    return odiv;
}

var timer = null;
// 监听滚动事件
window.onscroll = function() {
    clearTimeout(timer);
    if (getMinLi().minHeight < window.pageYOffset + window.innerHeight) {
        timer = setTimeout(function() {
            genData();
        }, 500);
    }
}