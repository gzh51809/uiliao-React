import React,{Component} from 'react';
import 'd/less/Search/Search.less'
class Search extends Component{
    goBack(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="Search">
                <div className="TopBar">
                <div className="contxt">
                    <div className="classify fl">
                       
                        <i className="iconfont icon-iconfontjiantou4" onClick={this.goBack.bind(this)}></i>
                    </div>
                    <input type="serach"  placeholder="输入关键字" />
                    <div className="shoping">
                        取消
                    </div>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default Search;