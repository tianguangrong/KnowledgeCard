//回顾promise的使用方法;
//以图片加载为例,介绍promise的使用;

var loadImg(src){
	var promise = new Promise(function(resolve,reject){
		
		var img = document.createElement("img");
		
		img.src = src;
		
		img.onload = function(){
			//加载成功
			resolve()
		};
		img.onerror = function(){
			//加载失败
			reject()
		}
		
	})
	
	return promise;
	
}

var src = "https://www.baidu.com/img/bd_logo1.png";
var resolve = loadImg(src);

resolve.then(function(arg){
	//加载成功后的代码扩展
	return arg //否则下面的.then将不会接收到arg
},function(arg){
	//加载失败后的代码扩展
}).then(function(arg){
	//加载成功后的代码扩展
},function(arg){
	//加载失败后的代码扩展
}).then(function(arg){
	//加载成功后的代码扩展
},function(arg){
	//加载失败后的代码扩展
})

//好处:
//增加了代码的扩展代码的开放性和修改代码的封闭性;
//具体体现:
//jQuery 1.5 版本前后 对于ajax 的封装的改变;


//如何捕获异常?
//规定.then只传一个参数,最后于用catch进行异常捕获;
resolve.then(function(arg){
	//加载成功后的代码扩展
	return arg //否则下面的.then将不会接收到arg
}).then(function(arg){
	//加载成功后的代码扩展
}).then(function(arg){
	//加载成功后的代码扩展
}).catch(function(ex){
	//统一进行异常捕获
	console.log(ex)
})









