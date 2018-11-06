import React, { Component}  from 'react';
import List from './list';
import Input from './input';
import './todo-list.css';


class TodoList extends Component {
    constructor(props){
        super(props);
        //数据
        this.state={
            lists:[]
        }
    };

    render(){
        return(
            <div>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List data={this.state.lists}/>
            </div>
        )
    }

    addTitle(title){
        
        const newLists = this.state.lists.concat(title)
        this.setState({
            lists:newLists
        })
    }

}
export default TodoList;

/*
*jsx如何渲染自定义组件?
*引入的Input和List都是构造函数
*<List data={this.state.lists}/>相当于:
*var list new List({this.state.lists})
*list.render()
*list.render()返回的是vnode;
*/