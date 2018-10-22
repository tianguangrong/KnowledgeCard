//1.什么是vDom,为什么存在vDom?
  //.用js来模拟DOM结构
  //.DOM变化的对比,放在JS层来做
  //.提高重绘功能;
  //.dom操作太昂贵,js操作效率高

//2.vDom的如何应用,核心api是什么?
  //.介绍snabbdom

  var vnode = h('ul#list',{
	  //添加属性如:style:{};
  },[
	//子节点的信息
	h('li.item',{},'Item 1'),
	h('li.item',{},'Item 2')
  
  ]);
  var container = document.getElementById("container");
  patch(container,vnode);
  //模拟改变;
  var btnChange = document.getElementById("button");
  
  btnChange.addEventListener("click",function(){
	  var vNewNode = h('ul#list',{},[
		
		h('li.item',{},'Item 111'),
		h('li.item',{},'Item 222'),
		h('li.item',{},'Item 333'),
	  ]);
	  patch(vnode,vNewNode);//查找改变,将不同的元素进行修改;
  })
  
  
//关于diff算法;
	//.什么是diff算法?
		//1.dom操作太昂贵,尽量减少dom操作
		//2.找出本次dom必须更新的节点,其他的不更新 
		//3.这个'找出'的过程就是diff算法
	
	//.去繁就简
	
	//.vDom为何用diff算法?
	
	//.diff算的核心流程
	
//diff 实现过程;
 //.patch(container,vNode);
 //.patch(vNode,vNewNode)
//. 示例代码,如何通过vNode获取真正的dom元素;
var vnode = {
	tag:"ul",
	attrs:{id:"list"},
	children:[
		{
			tag:"li",
			attrs:{className:"item"},	
			children:["item 1"]
		},
		{
			tag:"li",
			attrs:{className:"item"},	
			children:["item 2"]
		},
		{
			tag:"li",
			attrs:{className:"item"},	
			children:["item 3"]
		}
	
	]
}
//创建函数
function createElement(vnode){
	var tag = vnode.tag;//拿到父节点的标签名;
	var attrs = vnode.attrs || {} ;//拿到父节点的属性;
	var children = vnode.children || [] ;//拿到其子节点;
	
	//创建父节点的dom;
	var ele = document.createElement(tag);
	//给父节点的dom添加属性;
	var attrName;
	for(attrName in attrs){
		if(attrs.hasOwnProperty(attrName)){
			ele.setAttribute(attrName,attrs[attrName])
		}
		
	}
	//给ele添加子元素
	children.forEach(function(childVnode){
		ele.appendChild(createElement(childVnode))//递归
	})
	
	return ele;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	