/**
 * 安装依赖 node npm babel相关
 *  npm install --save-dev babel-plugin-transform-react-jsx
 * 
 * 启动编译程序
 * babel --plugins transform-react-jsx jsx-demo.jsx
 */
/* @jsx h*/
class Haa {
    render(){
        
        return(
            <div>
                <input type="text" value={this.state.title}  onChange={this.titleHandle.bind(this)}/>
                <button onClick={this.submitHandle.bind(this)}>提交</button>
            </div>
        )
    
    }
}