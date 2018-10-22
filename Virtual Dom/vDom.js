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