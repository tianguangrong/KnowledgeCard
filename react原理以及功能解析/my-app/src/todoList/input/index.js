import React,{ Component } from 'react';

export class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }

    render(){
        
        return(
            <div>
                <input type="text" value={this.state.title}  onChange={this.titleHandle.bind(this)}/>
                <button onClick={this.submitHandle.bind(this)}>提交</button>
            </div>
        )

    }
    titleHandle(event){
        this.setState({
            title:event.target.value
        })
    }
    submitHandle(){
        const title = this.state.title;
        const addTitle = this.props.addTitle;
        addTitle(title);
        this.setState({
            title:''
        })
    }

}
export default Input;