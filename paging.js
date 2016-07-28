

var pageAmount;
var pageCount;
var url;

//使用者需要初始化的一个方法，包含三个参数，数据的url，总页数，每次展示的页数。
function init (url,pageAmount,pageCount) {
	 this.pageAmount=pageAmount;
	 this.pageCount=pageCount;
	 this.url=url;
	 createBnGroup(pageAmount,pageCount);
}
//使用者需要给一块空间来放置按钮，该div的类名为bn-group
function createBnGroup (pageAmount,pageCount) {
	var btns=$(".bn-group");
	   if (pageCount>=pageAmount) 
	   {
	   	for (var i = 1; i <= pageAmount; i++) {
	   		btns.append("<button class='normal-bn'>"+i+"</button>");
	   	}
	   }
	   else
	   {
	   	btns.append("<button class='first-bn'>第一页</button>");
	   	btns.append("<button class='previous-bn'>上一页</button>");
	   	for (var i = 1; i <= pageCount; i++) {
	   		btns.append("<button class='normal-bn'>"+i+"</button>");
	   	}
	   	btns.append("<button class='next-bn'>下一页</button>");
	   	btns.append("<button class='last-bn'>最后一页</button>"); 	
	   }
	   $(".normal-bn:first").addClass("active-bn");
}
function handleActiveClass (pageNumber) {
	 
}
function getPageData(url,page) {
    var jsondata = $.ajax({
        url: url+"?id="+page,
        dataType: "json",
        success: function (data) {
            handleJsonData(JSON.stringify(data));
        }
    });
}

$(".next-bn").click(function () {
	 	 var maxpage=parseInt($(".normal-bn:last").text());
	 	 var thisPage=parseInt($(".active-bn").text());
	 	 
	 	 if (maxpage<pageAmount) {
	 	 	$(".normal-bn").each( function() {
	 	 		var thisPage=parseInt($(this).text())+1;
	 	 		$(this).text(thisPage);
	 	 	});
	 	 }	 
	 	 if (thisPage<pageAmount) {
	 	 	$(".active-bn").removeClass("active-bn");
	 	 	$(".normal-bn").each(function() {
	 	 		if (parseInt($(this).text())==thisPage+1){
	 	 			$(this).addClass("active-bn");
	 	 		}
	 	 	})
	 	 	getPageData(url, thisPage + 1);
	 	 }
	 	 
});
$(".previous-bn").click(function () {
	var thisPage=parseInt($(".active-bn").text());
	 if (parseInt($(".normal-bn:first").text())>1) {
	 	var nowPage=parseInt($(".active-bn").text())-1;
	 	$(".active-bn").removeClass("active-bn");
	 	$(".normal-bn").each(function () {
	 		var thisPage=parseInt($(this).text())-1;
	 		 $(this).text(thisPage);
	 		 if (nowPage==thisPage)
	 		 	$(this).addClass("active-bn");
	 	})	
	 }
	 if (thisPage>1) {
	 	 	$(".active-bn").removeClass("active-bn");
	 	 	$(".normal-bn").each(function() {
	 	 		if (parseInt($(this).text())==thisPage-1){
	 	 			$(this).addClass("active-bn");
	 	 		}
	 	 	})
	 	 	getPageData(url, thisPage - 1);
	 }
	 
})
$(".first-bn").click(function () {
	var i=1;
	 $(".normal-bn").each(function () {
	 	 $(this).text(i);
	 	 if (i==1) 
	 	 	$(this).addClass("active-bn");
	 	 else
	 	 	$(this).removeClass("active-bn");
	 	 i++;
	 });
	 getPageData(url, 1);
});
$(".last-bn").click(function () {
	var i=pageAmount-pageCount+1;
	 $(".normal-bn").each(function () {
	 	 $(this).text(i);
	 	 if (i==pageAmount) 
	 	 	$(this).addClass("active-bn");
	 	 else
	 	 	$(this).removeClass("active-bn");
	 	 i++;
	 });
	 getPageData(url, pageAmount);
});
$(".normal-bn").click(function () {
	 var nowPage=parseInt($(this).text());
	 var startPage=1;
	 var division=parseInt(pageCount/2);
	 if ((pageAmount-nowPage)>division&&nowPage>division) {
	 	startPage=nowPage-division;
	 }
	 else if (nowPage<=division)
	  {
	  	startPage=1;
	  }
	 else
	 {
	 	startPage=pageAmount-pageCount+1;
	 }
	  $(".normal-bn").each(function () {
	 		 $(this).text(startPage);
	 		 if (startPage==nowPage) 
	 	 		$(this).addClass("active-bn");
	 	 	else
	 	 		$(this).removeClass("active-bn");
	 		 startPage++;
	  })
	  getPageData(url, nowPage);
})

//使用者需要自己定义该函数内部的逻辑来操作获得的Json数组或者json字符串
function handleJsonData(data) {//data数据根据你获取的内容可以为json对象或json数组
    
}
