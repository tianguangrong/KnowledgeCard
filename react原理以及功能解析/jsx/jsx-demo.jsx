/**
 * 安装依赖 node npm babel相关
 *  npm install --save-dev babel-plugin-transform-react-jsx
 * 
 * 启动编译程序
 * babel --plugins transform-react-jsx jsx-demo.jsx
 */

/* @jsx h*/
// class Haa {
//     render(){
        
//         return(
//             <div>
//                 <input type="text" value={this.state.title}  onChange={this.titleHandle.bind(this)}/>
//                 <button onClick={this.submitHandle.bind(this)}>提交</button>
//             </div>
//         )
    
//     }
// }

import React, { Component}  from 'react';


class List extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        const lists = [1,2,3,4,5];
        return(
            <ul>
                
                   {
                        lists.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                
            </ul>
        )
    }

}
export default List;

/*
*jsx是什么?
*jsx语法(标签,js表达式,判断,循环,事件绑定);
*jsx是语法糖,最终还是被解析成js;
*jsx是独立的标准,可被其他项目使用;
*/
/*
jsx和vDom的关系?
1.为何需要vDom?
    .vDom是react推广开来的,结合jsx;
    .jsx就是模板,最终渲染成HTML;
    .初次渲染,修改state数据后的re-render;
    .正好符合vDom的应用场景;
2.React.createElement和 h函数?
3.何时patch?

*/ 

/*
*何时patch？
*初次渲染-ReactDOM.render(<app/>,container);
*会触发patch(container,vnode)
*re-render -setState()
*会触发patch(vnode,newVnode)
*
*/

/*
*jsx和 vDom的关系?
*jsx需要渲染成HTML,数据驱动视图;
*React.createElement和h都生成vnode;
*ReactDOM.render和setState时候进行patch操作
*自定义组件的解析:初始化示例然后执行render;
*
*/

/*
*说一下react中的setstate的过程?
*setstate是异步的;vue的修改属性也是异步的;
*setstate最终走到patch(preVNode,newVNode)
*/

/*
*setstate为何需要异步
*可能会一次执行多个setstate;
*你无法规定,限制用户如何使用setstate;
*考虑性能,没必要每次setstate都重新渲染
*即使是每次渲染,因为js是单线程,js在渲染时,页面会出现卡顿现象,用户也看不到中间的结果;
*让用户看到最后的结果即可
*
*/