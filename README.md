# JSPageComponent
##一个只需要处理获取的数据的分页组件
##  [演示地址](http://121.43.106.56:81/)
##组件的使用方法：
- 引入paging.js文件，引入jquery。
- 在需要放置按钮的地方添加一个div，并设置class为bn-group
- 调用init函数，并传入三个参数，依次为获取数据的url，总页数，显示的页数。ps：前台的url后面传递页数的参数名为page。
- 最后只需要在handleJsonData(data)函数中填写自己处理数据的逻辑。data是json对象或者数组。

####按钮样式是默认的请使用者自己根据需求设置按钮的样式
