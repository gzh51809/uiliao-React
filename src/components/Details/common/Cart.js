import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
class Cart extends Component{
    goAddCart(){
        let {history,match}=this.props;
        let id=match.params.id
    
        history.push(`/addcart?Id=${id}`);
    }
    render(){
        return(
            <div className="Cart">
                <div className="icon">
                    <i className="iconfont icon-icowodeshoucang"></i>
                    <span>收藏</span>
                </div>
                <div className="icon">
                    <i className="iconfont icon-service_icon"></i>
                    <span>客服</span>
                </div>
                <button className="Car" onClick={this.goAddCart.bind(this)}>加入购物车</button>
                <button className="go" onClick={this.goAddCart.bind(this)}>立即购买</button>
            </div>
        )
    }
}

Cart=withRouter(Cart);

export default Cart;