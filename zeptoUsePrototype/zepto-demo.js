//示例:zepto是如何使用原型的?
//$("#div").html("1111")为例;

var zepto={};

$.fn = {
    constructor:zepto.Z,
    html:function(){

    },
    css:function () {
        
    }
}



zepto.Z.prototype = Z.prototype = $.fn;


function Z (dom,selector){
    var i , len = dom.length ? dom.length : 0;
    for ( i = 0; i < dom.length; i++) {
        this[i] = dom[i];  
    }
    this.length = len;
    this.selector = selector || '';
}

zepto.Z = function(dom,selector){
    // 实例化构造函数;
    return new Z(dom,selector);
}

zepto.init = function (selector) {
    //获取数组原型中的slice方法;
    var slice = Array.prototype.slice;
    //将对象转化成数组;
    var dom = slice.call(document.querySelectorAll(selector));
    return zepto.Z(dom,selector);
}

var $ = function(selector){
    return zepto.init(selector);
}

//解析:
//1.$为一个函数
//2.$()的过程就是 实例化 new Z() 构造函数的过程;
//3.Z.prototype最后被赋值成$.fn
//4.$.fn 为 { html:function(){}}
//$("#div").html("1111")就含有了html方法;