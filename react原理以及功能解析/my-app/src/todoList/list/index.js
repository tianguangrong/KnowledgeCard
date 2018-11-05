import React, { Component}  from 'react';


class List extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        const lists = this.props.data;
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