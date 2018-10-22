//以ajax为例进行deferred的介绍;
//第一种写法jquery1.5以上;
var ajax = $.ajax('url');
ajax.done(function(res){
	console.log("res:"+res)
}).fail(function(){
	
}).done(function(res){
	console.log("res:"+res)
}).fail(function(){
	
})
//第二种写法
var ajax = $.ajax('url');
ajax.then(function(res){
	//加载成功后的回调;
},function(res){
	//加载失败后的回调;
}).then(function(res){
	//加载成功后的回调;
},function(res){
	//加载失败后的回调;
})

//如何在具体的项目中使用deferred;

function waitHandle(){
	//实例化deferred;
	var dtd = $.Deferred();
	
	var wait = function(dtd){
		var task = function(){
			//异步执行完成
			dtd.resolve();
		}
		setTimeout(task,2000);
		return dtd;//返回deferred对象;
	}
	//注意,这里一定要有返回值;
	return wait(dtd);
}
var d = waitHandle();
d.then(function(){
	//加载成功后的回调;
},function(){
	//加载失败后的回调;
}).then(function(){
	//加载成功后的回调;
},function(){
	//加载失败后的回调;
})