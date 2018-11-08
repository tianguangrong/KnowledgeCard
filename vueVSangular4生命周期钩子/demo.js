/**
 * vue的声明周期钩子
 * var vm = Vue({
 *  el:'作用域',
 *  data:{
 *      添加数据;
 *  },
 *  methods:{
 *      添加方法
 *  },
 *  components:{
 *      添加自定义组件
 *  },
 *  beforeCreate:function(){
 *      //声明周期钩子-在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
 *  },
 *  created:function(){
 *      //声明周期钩子-在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：
 *          数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
 *          然而，挂载阶段还没开始，$el 属性目前不可见。
 *  },
 *  beforeMount:function(){
 *      //声明周期钩子-在挂载开始之前被调用：相关的 render 函数首次被调用。
 *  },
 *  mounted:function(){
 *      //声明周期钩子-el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
 *          如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内.
 *  },
 *  beforeUpdate:function(){
 *      //数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
 *  },
 *  updated:function(){
 *      //虚拟DOM重新渲染或者打补丁之后
 *  },
 *  beforeDestroy:function(){
 *      //实例销毁之前调用。在这一步，实例仍然完全可用
 *  },
 *  destroyed:function(){
 *      //Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
 *  }
 * 
 * 
 * 
 * })
 */

/**
 * angular4+生命周期钩子
 * 
 * 引入钩子
 * import { Input ,OnInit, ChangeDetectionStrategy, OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit } from '@angular/core';
 * 在类里面添加依赖
 * export class Name implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
 *      
 *      @ViewChild('child1') child:ChildComponent;
 *      @Input() item;
 *      constructor(){
 *          //此时输入属性还没有注册到Item上
 *      }
 * 
 *      NgOnInit(){
 *          //页面 初始化的时候触发该钩子,晚于constructor和NgOnChanges调用
 *      }
 * 
 *      NgOnChanges(changes:SimpleChanges):void{
 *          //监听输入属性的变化,当输入属性的内存地址发生变化的时候,该钩子会被触发,先于OnInit触发;
 *      }
 * 
 *      NgDoCheck(){
 *          //当输入input发生 focus blur change的事件时,都会被监听,触发此属性
 *          //注意:在此钩子中慎用此钩子,使用不当容易引起性能问题
 *      }
 * 
 *      NgAfterContentInit(){
 *          //该组件调用时视图还没有组装完毕,所以可以更改组件信息;
 *          //投影初始化完毕时调用该钩子
 *      }
 * 
 *      NgAfterContentCheck(){
 *          //该组件调用时视图还没有组装完毕;,所以可以更改组件信息
 *          //投影变更监测完毕时调用该钩子
 *      }
 * 
 *      NgAfterViewInit(){
 *             //该组件调用时视图已经组装完毕;
 *             //通过@ViewChild调用子组件的方法和属性页面初始化之后触发;
 *              //此钩子只在初始化时执行一次,并且是在子组件的NgAfterViewInit/NgAfterViewInit调用之后
 *              //在此钩子中不能再修改视图信息,原因是视图已经组装完毕
 *      }
 * 
 *      NgAfterViewInit(){
 *          //该组件调用时视图已经组装完毕,在此钩子中不能再修改视图信息;
 *          //通过@ViewChild调用子组件的方法和属性页面变更监测之后触发;
 *          //此钩子会在子组件中被你调用的方法触发时被多次调用,并且是在子组件的NgAfterViewInit/NgAfterViewInit调用之后
 *      }
 * 
 *      NgOnDestroy(){
 *          //页面销毁的时候调用
 *      }
 * }
 * 
 * 
 */