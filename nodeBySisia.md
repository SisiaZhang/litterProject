## baymax

[【Web】打造网页版「大白」- Baymax ](https://www.cnblogs.com/yyyyfly1/p/15941434.html)

### 1. background和background-color的区别

[CSS的背景](https://docs.mphy.top/#/CSS/ch02?id=_4-css-%e7%9a%84%e8%83%8c%e6%99%af)

### 2. 如何将less转为css

[在vscode中如何使用less编程 ](https://www.cnblogs.com/fightjianxian/p/12793159.html)

### 3. margin的用法

margin:0 auto；是将元素的上下边距设为0；左右边距都是自动的，也就是左右边距是自动的相等的，上下边距是固定值0；这样元素就在行内水平居中了。

### 4. border-radius：50%；

[border-radius:50%是什么意思](https://www.csdn.net/tags/NtzaQg0sMDA0MDUtYmxvZwO0O0OO0O0O.html)；[border-radius - CSS（层叠样式表）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

当这个div是矩形的时候（ width: 100px;   height: 64px;），上式就等价于：

```
border-top-left-radius: 50%;
border-top-right-radius: 50%;
border-bottom-left-radius: 50%;
border-bottom-right-radius: 50%;
```

或者

```
border-top-left-radius: 50px 32px;
border-top-right-radius: 50px 32px;
border-bottom-left-radius: 50px 32px;
border-bottom-right-radius: 50px 32px;
```

而

```
border-top-left-radius: length | % [length | %];
注意: border-top-left--radius属性的两个长度或百分比值定义了椭圆的四分之一外边框的边缘角落的形状。第一个值是水平半径，第二个是垂直半径。如果省略第二个值，它是从第一个复制。如果任一长度为零，角落里是方的，不圆润。水平半径的百分比是指边界框的宽度，而垂直半径的百分比是指边界框的高度。
```

## 2048小游戏

[前端作品集（三）小游戏开发--网页版2048 - 简书 (jianshu.com)](https://www.jianshu.com/p/13fe7757271a)

## 别踩白块小游戏

[html5实现简单别踩白块小游戏 - XieYingpeng - 博客园 (cnblogs.com)](https://www.cnblogs.com/Xieyingpeng/p/14452361.html)

### 1.border-collapse 

border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是像在标准的 HTML 中那样分开显示。

```
collapse	如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性
separate	默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性
inherit		规定应该从父元素继承 border-collapse 属性的值
```

### 2.onclick事件

onclick 事件会在元素被点击时发生。

```
HTML 中:

<element onclick="SomeJavaScriptCode">

JavaScript 中:

object.onclick=function(){SomeJavaScriptCode};
```

### 3.createElement() 

createElement() 方法通过指定名称创建一个元素

`document.createElement(nodename)`

### 4.insertBefore() 

insertBefore() 方法可在已有的子节点前插入一个新的子节点。

`node.insertBefore(newnode,existingnode)`

| 参数           | 类型     | 描述                             |
| :------------- | :------- | :------------------------------- |
| *newnode*      | 节点对象 | 必须。要插入的节点对象           |
| *existingnode* | 节点对象 | 必须。要添加新的节点前的子节点。 |

### 5.getComputedStyle() 

getComputedStyle() 方法用于获取指定元素的 CSS 样式。

获取的样式是元素在浏览器中最终渲染效果的样式。

```
window.getComputedStyle(element, pseudoElement)

- element: 必需，要获取样式的元素。
- pseudoElement: 可选，伪类元素，当不查询伪类元素的时候可以忽略或者传入 null。

返回的对象是 CSSStyleDeclaration 类型的对象。
```

getComputedStyle 和 element.style 的相同点就是二者返回的都是 CSSStyleDeclaration 对象，取相应属性值得时候都是采用的 CSS 驼峰式写法，均需要注意 float 属性。

而不同点就是：

- element.style 读取的只是元素的内联样式，即写在元素的 style 属性上的样式；而 getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。
- element.style 既支持读也支持写，我们通过 element.style 即可改写元素的样式。而 getComputedStyle 仅支持读并不支持写入。我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式
- 我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式。

### 6.clearInterval() 

clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作。

clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值。

**注意:** 要使用 clearInterval() 方法, 在创建执行定时操作时要使用全局变量：

```
myVar = setInterval("javascript 函数", milliseconds);
```

```
clearInterval(id_of_setinterval)
```

| 参数              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| id_of_setinterval | 调用 setInterval() 函数时所获得的返回值，使用该返回标识符作为参数，可以取消该 setInterval() 所设定的定时执行操作。 |

setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

提示： 1000 毫秒= 1 秒。

提示： 如果你只想执行一次可以使用 setTimeout() 方法。

```
setInterval(function, milliseconds, param1, param2, ...)
```

| 参数                | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| code/function       | 必需。要调用一个代码串，也可以是一个函数。                   |
| milliseconds        | 必须。周期性执行或调用 code/function 之间的时间间隔，以毫秒计。 |
| param1, param2, ... | 可选。 传给执行函数的其他参数（IE9 及其更早版本不支持该参数）。 |

### 7.innerHTML 属性

获取元素内容的最简单方法是使用 innerHTML 属性。

innerHTML 属性对于获取或替换 HTML 元素的内容很有用。

`HTMLElementObject.innerHTML=text`

### 8.target 事件属性

target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。

`event.target`

### 9.indexOf() 方法

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

如果没有找到匹配的字符串则返回 -1。

*string*.indexOf(*searchvalue*,*start*)

| 参数          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| *searchvalue* | 必需。规定需检索的字符串值。                                 |
| *start*       | 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。 |

```
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");

n 输出结果:
13
```



## 扫雷小游戏

[(2条消息) 纯JS实现简易扫雷小游戏网页项目_Josephine_HuHu的博客-CSDN博客](https://blog.csdn.net/weixin_45007812/article/details/118051618)

## canvas实现放大镜效果

[(2条消息) canvas之放大镜效果_WHTGS的博客-CSDN博客_canvas 放大镜](https://blog.csdn.net/WHTGS/article/details/105310625)

### 1.getContext

- var ctx=c.getContext("2d");

getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。

`<canvas>` 元素本身并没有绘制能力（它仅仅是图形的容器），必须使用脚本来完成实际的绘图任务。

- ctx.drawImage()

drawImage() 方法在画布上绘制图像、画布或视频。

drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。

```
context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

img	规定要使用的图像、画布或视频。	 
sx	可选。开始剪切的 x 坐标位置。
sy	可选。开始剪切的 y 坐标位置。
swidth	可选。被剪切图像的宽度。
sheight	可选。被剪切图像的高度。
x	在画布上放置图像的 x 坐标位置。
y	在画布上放置图像的 y 坐标位置。
width	可选。要使用的图像的宽度（伸展或缩小图像）。
height	可选。要使用的图像的高度（伸展或缩小图像）。
```

- ctx.clearRect() 

drawImage()方法清空给定矩形内的指定像素。

```
context.clearRect(x,y,width,height);

x	要清除的矩形左上角的 x 坐标。
y	要清除的矩形左上角的 y 坐标。
width	要清除的矩形的宽度，以像素计。
height	要清除的矩形的高度，以像素计。
```

### 2.addEventListener

document.addEventListener(*event*, *function*, *useCapture*)

### 3.clientX 

event.clientX

clientX 事件属性返回当事件被触发时鼠标指针相对于浏览器页面（或客户区）的水平坐标。客户区指的是当前窗口。

### 4.JS设置CSS样式的几种方式

[JS设置CSS样式的几种方式](https://www.cnblogs.com/LH-721109/p/15849414.html)

```
element.style.height = '100px';
```

### 5.错误情况

使用canvas时出现Uncaught TypeError: Cannot read property ‘getContext‘ of null 错误。

这是因为浏览器还没有加载htnml文件的时候就已经执行了文件。

## 瀑布流

[瀑布流](https://blog.csdn.net/m0_51937621/article/details/122726301)

### 1.list-style	

简写属性。用于把所有用于列表的属性设置于一个声明中

### 2.XMLHttpRequest 对象

XMLHttpRequest 对象用于在后台与服务器交换数据。

XMLHttpRequest 对象是**开发者的梦想**，因为您能够：

- 在不重新加载页面的情况下更新网页
- 在页面已加载后从服务器请求数据
- 在页面已加载后从服务器接收数据
- 在后台向服务器发送数据

```
创建 XMLHttpRequest 对象的语法：
xmlhttp=new XMLHttpRequest();

旧版本的Internet Explorer（IE5和IE6）中使用 ActiveX 对象：
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
```

XMLHttpRequest 的 onload 和 onerror 属性都是函数，分别在它请求成功和请求失败时被调用。

### 3.onreadystatechange 事件

当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

下面是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪 |
| status             | 200: "OK" 404: 未找到页面                                    |

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

```
xmlhttp.onreadystatechange=function() {    
	if (xmlhttp.readyState== 4 && xmlhttp.status==200)    {   
    	document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    } 
}
```

### 4.JSON.parse()

JSON.parse() 方法用于将一个 JSON 字符串转换为对象。

```
JSON.parse(text[, reviver])
```

参数说明：

- **text:**必需， 一个有效的 JSON 字符串。
- **reviver:** 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

返回值：返回给定 JSON 字符串转换后的对象。

### 5.服务器响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                       |
| :----------- | :------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |

- responseText 属性

如果来自服务器的响应并非 XML，请使用 responseText 属性。

responseText 属性返回字符串形式的响应，因此您可以这样使用：

```
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```

- responseXML 属性

如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性

### 6.toUpperCase() 方法

toUpperCase() 方法用于把字符串转换为大写。

```
string.toUpperCase()
```

### 7.向服务器发送请求

XMLHttpRequest 对象用于和服务器交换数据。

如需将请求发送到服务器，我们使用 **XMLHttpRequest** 对象的 **open()** 和 **send()** 方法：

```
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。*string*：仅用于 POST 请求               |

### 8.offsetWidth 属性

offsetWidth 属性是一个只读属性，它返回该元素的像素宽度，宽度包含内边距（padding）和边框（border），不包含外边距（margin），是一个整数，单位是像素 px。

通常，元素的 offsetWidth 是一种元素 CSS 宽度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含 **:before**或 **:after** 等伪类元素的宽度。

对于文档的 body 对象，它包括代替元素的 CSS 宽度线性总含量高。浮动元素的向下延伸内容宽度是被忽略的。

```
element. offsetWidth 
返回值：返回一个整数，表示该元素的像素宽度。
```

### 9.pageXOffset 

pageXOffset 和 pageYOffset 属性返回文档在窗口左上角水平和垂直方向滚动的像素。

pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。

pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。这些属性是只读的。

```
window.pageXOffset
window.pageYOffset
```

### 10.innerHeight 

innerHeight 返回窗口的文档显示区的高度，如果有垂直滚动条，也包括滚动条高度。

innerWidth 返回窗口的文档显示区的宽度，如果有水平滚动条，也包括滚动条高度。

innerWidth 和 innerHeight 是只读属性。

**注意：**使用 [outerWidth 和 outerHeight](https://www.runoob.com/jsref/prop-win-outerheight.html) 属性获取浏览器窗口的宽度与高度。

获取文档显示区的宽度与高度：

```
window.innerWidth
window.innerHeight
```

设置文档显示区的宽度与高度：

```
window.innerWidth=pixels
window.innerHeight=pixels
```

## Node.js实现前后端交互

[Node.js实现前后端交互——用户登陆 - 莫颀 - 博客园 (cnblogs.com)](https://www.cnblogs.com/bokemoqi/p/15587693.html)

## node.js小案例_留言板

[node.js(小案例)_实现学生信息增删改 - mysunshine_SZZ - 博客园 (cnblogs.com)](https://www.cnblogs.com/xxm980617/p/10550179.html)