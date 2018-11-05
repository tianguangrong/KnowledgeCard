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