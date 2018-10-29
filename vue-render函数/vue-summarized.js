1.解析模板成render函数.
   function render() {//模板的所有信息都会被此函数包含;
        with(this){//自己写代码,不建议使用.
            return _c(//第一个是dom
                'div'
           ,{//第二个参数是属性值
                attrs:{
                    'id':'app'
                }
            },[//第三个参数是子节点的信息
                _c('p',[_v(_s(price))])
            ] )
        }
    }
    <1.模版中所有的信息都会转化成js变量;
    <2.模板中的v-for,v-if,v-model 最后也都转化成了js变量;

2.响应式开始监听;
   var vm = {};
    var data = {
        title:"你好",
        desc:'只是一句问候语!'
    }
    var key;
    for ( key in data) {
        //闭包,保留key值,使得每个key都有一个独立的工作域;
        (function (key) {
            Object.defineProperty(vm,key,{

                set:function(newVal){
                  data[key]=newVal;
                },
                get:function(){
                    return data[key];
                }

            })


        })(key)
    }
  <1.object.defineProperty;
  <2.将data里面的信息代理到vm上;

3.首次渲染,显示页面,且绑定依赖.
  vm._update(vnode){
	var prevVnode = vm._vnode;
	vm._vnode = vnode;
	if(!prevVnode){
		vm.$el=vm._patch_($el,vnode);
	}else{
		vm.$el=vm.vm._patch_(prevVnode,vnode)
	}
  }

  function(){
	//vm._render()即为上面的render函数,返回的是vnode;
	vm._update(vm._render())
  }
  注解:实现方式和snabbdom的 h() vnode patch 函数的实现原理类似;
  <1.初次渲染,执行updateComponent,执行vm._render();
  <2.执行render函数,会访问到vm.list和vm.title;
  <3.会被响应式的get方法监听到
	.为什么要监听get方法,直接监听set不行吗?
         data中有很多的属性,有的被用到有的不被用到,被用的走get方法,
	 不被用到的也不会走get方法,未走get的set也不必去关心.
	.目的:
	 避免不必要的重复渲染;
		
	 
  <4.执行updateComponent,会走到vDom的patch方法中
  <5.patch将vnode渲染成DOM,初次渲染完成;
 
4.data属性变化,处罚rerender;
  <1.修改属性,被响应式的set监听到;
  <2.set中执行updateComponent;
  <3.updateComponent重新执行vm._render();
  <4.生成的vnode和prevVnode,通过patch进行对比;
  <5.渲染到html中;

关于vue的考点总结
.说一下使用jQuery和使用框架的区别;
	<1>数据和视图的分离,解耦.
	<2>以数据驱动视图,只关心数据变化,DOM操作呗封装;
.说一下对MVVM的理解;
	<1>Model View ViewModel
	<2>三者的联系,以及对应的相应的代码片段;
	<3>ViewModel的理解,是联系Model和View的桥梁
.vue中如何实现响应式;
	<1>理解Object.defineProperty
	<2>将data的属性代理到vm上;
.vue中如何解析模板;
	<1>模板:字符串,有逻辑,嵌入js变量
	<2>模板必须转换为js代码(有逻辑.渲染HTML.js变量)
	<3>render函数,返回vnode;
	<4>updateComponent函数
	<5>updateComponent函数中的patch方法
.vue的整个实现流程;
	<1>解析模板成render函数
	<2>响应式开始监听
	<3>初次渲染,显示页面,且绑定依赖
	<4>data属性变化,处罚rerender
