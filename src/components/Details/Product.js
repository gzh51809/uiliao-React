import React,{Component} from 'react';
import {withRouter,Route,Switch} from 'react-router-dom'
import Swiper from 'swiper'


import Banner from './common/Product/Banner'
import Info from './common/Product/Info'
import Commonet from './common/Product/Comment'
import Cart from './common/Cart'
class Product extends Component{
    constructor(props){
        super(props)
        this.state={
        }
        let timer=null
    }
    componentDidMount(){
        // ----------------Swiper 轮播图配置
        
        this.timer=setTimeout(()=>{
        var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            }
          
          });
        document.querySelector('.xq').innerHTML=this.props.xq;
      
         
       },500)
        // ----------------Swiper 轮播图配置 END
        
    
    }
  
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        let {BannerArray}=this.props;
       
        return(
            <div className="Product">
                <Banner BannerArray={this.props.BannerArray}/>
                <Info
                    name={this.props.name}
                    maxPrice={this.props.maxPrice}
                    minPrice={this.props.minPrice}
                    marketPrice={this.props.marketPrice}
                />
                <Commonet/>
               
                <div className="xq" ref='xq'></div>
                <Cart/>
            </div>
          
        )
    }
}
Product=withRouter(Product)
export default Product;