//jQuery使用原型
//示例:实现$$("div").html();

(function (window) {
    jQuery.fn = {
        html:function () {
            
        },
        css:function () {
            
        }
    }

    var init =  jQuery.fn.init = function(selector){
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector));

        var i,len = dom ? dom.length : 0;
        for ( i = 0; i < len.length; i++) {
            this[i] = dom[i]
            
        }
        this.length = len ; 
        this.selector = selector || "" ;
    }


    var jQuery = function (selector) {
        return jQuery.fn.init(selector);
    }

    init.prototype = jQuery.fn;

    window.$ = jQuery;
    
})(window)