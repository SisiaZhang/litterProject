var clock = null;
var speed = 6;
var state = 0;
var flag = false;

function start() {
    if (!flag) {
        init();
    } else {
        alert('游戏已经开始，无需再次点击！');
    }
}

function init() {
    flag = true;
    for (var i = 0; i < 4; i++) {
        creatRow();
    }
    // 添加onclick事件
    document.querySelector('#main').onclick = function(ev) {
            // 这句是什么意思
            ev = ev || Event;
            judge(ev);
        }
        // 定时器
    clock = window.setInterval('move()', 30);
}

function creatDiv(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

function creatRow() {
    // 这个$是jquery里的？要下载jQuery吗？
    var con = document.querySelector('#con');
    var row = creatDiv('row');
    var arr = createCell();
    // con.appendChild(row);
    for (var i = 0; i < 4; i++) {
        row.appendChild(creatDiv(arr[i]));
    }
    if (con.firstChild == null) {
        con.appendChild(row);
    } else {
        con.insertBefore(row, con.firstChild);
    }
}

function delrow() {
    var con = document.querySelector('#con');
    if (con.childNodes.length === 6) {
        con.removeChild(con.lastChild);
    }
}

function createCell() {
    var temp = ['cell', 'cell', 'cell', 'cell'];
    var i = Math.floor(Math.random() * 4);
    temp[i] = 'cell black';
    return temp;
}

function move() {
    var con = document.querySelector('#con');
    var top = parseInt(window.getComputedStyle(con, null)['top']);

    if (speed + top > 0) {
        top = 0;
    } else {
        top += speed;
    }
    con.style.top = top + 'px';
    over();
    if (top == 0) {
        creatRow();
        con.style.top = '-102px';
        delrow();
    }
}

function speedup() {
    speed += 2;
    if (speed == 20) {
        alert("你超神了!");
    }
}

function over() {
    var con = document.querySelector('#con');
    var rows = con.childNodes;
    // 这个pass是什么
    if (rows.length == 5 && rows[rows.length - 1].pass !== 1) {
        fail();
    }
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].pass1 == 1) {
            fail()
        }
    }
}

function fail() {
    clearInterval(clock);
    flag = false;
    confirm('你最终的得分为' + parseInt(document.querySelector('#score').innerHTML));
    var con = document.querySelector('#con');
    con.innerHTML = '';
    document.querySelector('#scroe').innerHTML = 0;
    con.style.top = '-408px';
}

// 判断是黑块还是白块
function judge(ev) {
    if (ev.target.className.indexOf('black') == -1 &&
        ev.target.className.indexOf('cell') !== -1) {
        //定义属性pass，表示此行row的白块已经被点击
        ev.target.parentNode.pass1 = 1;
    }
    if (ev.target.className.indexOf('black') !== -1) {
        ev.target.className = 'cell';
        //定义属性pass，表明此行row的黑块已经被点击
        ev.target.parentNode.pass = 1;
        score();
    }
}

function score() {
    var newScore = parseInt(document.querySelector('#score').innerHTML) + 1;
    document.querySelector('#score').innerHTML = newScore;
    if (newScore % 10 == 0) {
        speedup;
    }
}