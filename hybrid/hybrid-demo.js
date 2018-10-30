//hybrid是什么,为什么要用hybrid?
    //1.混合开发,前端和客户端共同开发配合完成;

//hybird存在的价值.
    //1.可以快速得待更新,无需应用商店的审核.
    //2.体验流畅(基本和native的体验是类似的).
    //3.减少开发成本和沟通成本.双端公用一套代码.


//hybrid的缺点
    //1.开发成本高:联调/测试/查bug都比较麻烦;
    //2.运维成本高,更新上线流程复杂;

//webview
    //1.app的一个组件(app可以有webview也可以没有.)
    //2.用于加载h5页面是一个小型的浏览器内核.

//file:// 协议:加载本地文件,速度快;
//http(s):// 协议:加载远程文件,速度慢;


//hybrid适用的场景
    //1.不是所有的场景都适用hybrid;
    //2.客户端/native:体验要求极高变化不平凡的页面;
    //3.适用hybrid:体验要求高,变化频繁(如头条的新闻详情页);
    //4.使用h5:单次的运营活动(如红包),体验无要求,不常用的(如举报/反馈等页面)

//hybrid实现方式:
    //1.前端做好静态页面(CSS/HTML/js),交给客户端;
    //2.客户端拿到静态页面,以文件形式存储在app中;
    //3.客户端在一个webview中;
    //4.使用file://加载静态页面;

                    // app



        //webview       <--file协议--       //静态页面 js css html



//问题:
    //1.app发布之后,静态文件如何实时更新.
        //.要替换每个客户端的静态文件;
        //.只能客户端来做
        //.客户端 去server下载最新的静态文件包,并解压相关文件,
        //  这个过程中为了避免浪费流量,应该对比客户端版本和静态文件包版本,不同则下载,
        //  并将包的版本替换到客户端的版本
        //.我们维护server端的静态文件;

    //2.静态页面如何获取内容?
        //不能用ajax:1.协议不一样-跨域.2.加载速度慢
        //客户端获取新闻内容(预取),然后js通信拿到内容,在渲染;

//js和客户端通讯的基本形式:
    //1.js访问客户端能力,传递参数和回调函数;
    //2.客户端通过回调函数返回内容;

//schema协议简介和使用:
    //1.部分微信号schema协议实例一个 :weixin://dl/scan 扫一扫  weixin://dl/feedback 反馈
    /*
        此代码只是演示:不能运行
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'weixin://dl/scan';
        var body = document.body || document.getElementsByTagName('body')[o];
        body.appendChild(iframe);

        setTimeout(function(){
            body.removeChild(iframe);
            iframe = null;
        })
    
    */
   /*
        如果加上参数和callback,则这样编写;

        设置一个全局的函数和jsonp原理相似
        window['_weixin_scan_callback'] = function(result){
            //在这里填写返回的值,处理方式;
        }
        iframe.src = 'weixin://dl/scan?params = p&callback = _weixin_scan_callback';
   */

   /*封装*/
   /*weixin:示例*/
   /*
         window.invoke.share({title:'',content:''},function(result){
            if(result.error == 0){
                alert('分享成功');
            }else{
                alert('分享失败');
            }

         })
   */
  /*
         window.invoke.share({title:'',content:''},function(result){
            if(result.error == 0){
                alert('分享成功');
            }else{
                alert('分享失败');
            }

         })
   
   
   */
/*自封装:示例*/

         (function (window) {
            function share(data,callback) {
                _invoke('share',data,callback)
            }
   
            function scan(data,callback) {
               _invoke('scan',data,callback)
           }
   
           function feedback(data,callback) {
               _invoke('feedback',data,callback)
           }
   
        function _invoke(action,data,callback) {
            //处理schema
            var schema = 'tgr://utils';
            schema += '/'+action;
            schema += '?a=a';
            var key;
            for ( key in data) {
                if (object.hasOwnProperty(key)) {
                    schema += '&'+key+'='+data[key];
                    
                }
            }
            //处理callback;
            var callbackName;
            if(typeof callback == 'string'){
                callbackName = callback;
            }else{
                callbackName = action + Date.now();
                window[callbackName] = callback;
            }
            
            schema += '&callback=' + callbackName;

            //触发
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = schema;
            var body = document.body || document.getElementsByTagName('body')[o];
            body.appendChild(iframe);

            setTimeout(function(){
                body.removeChild(iframe);
                iframe = null;
            })


        }
           
           //将函数暴露给全局
           window.invoke = {
               share:share,
               scan:scan,
               feedback:feedback
           }
         })(window)





















                                                       