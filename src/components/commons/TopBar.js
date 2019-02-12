import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'd/less/commons/TopBar.less'
class TopBar extends Component{
    constructor(){
        super()
        this.goto=this.goto.bind(this)
        
    }
    goto(){
      
        this.props.history.push(this.props.link)
    }
    skip(){
        console.log()
        this.props.history.push('/search')
    }
    render(){

        return(
            <div className="TopBar">
                <div className="contxt">
                    <div className="classify fl" onClick={()=>{
                    this.goto()
                }}>
                        <i className={this.props.leftIcon}></i>
                        <span>{this.props.leftNmae}</span>
                    </div>
                    <input type="serach" autoComplete="off" readOnly={true} placeholder="搜索面料/店铺" onClick={ this.skip.bind(this)}/>
                    <div className="shoping">
                        <i className="iconfont icon-xiazai1"></i>
                        <span>购物车</span>
                    </div>
                    <div className="my">
                        <i className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </div>
                </div>
            </div>
        )
    }
}
TopBar=withRouter(TopBar)
export default TopBar;