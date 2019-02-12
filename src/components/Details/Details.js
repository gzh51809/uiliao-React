import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { Tabs } from 'antd';

// 引入actions操作redux
import DetailsActions from '../../actions/Details'

import 'd/less/Details/Details.less'

// 引入嵌套路由
import Product from './Product';
import Img from './Img'
import Comment from './Comment'
import Parameter from './Parameter';

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            tabs:[
                {
                    text:'宝贝',
                    path:'/product'
                },{
                    text:'详情',
                    path:'/img'
                },{
                    text:'参数',
                    path:'/parameter'
                },{
                    text:'评论',
                    path:'/comment'
                }
            ],                      //嵌套路由
            current:'/product',     // 嵌套路由当前选中  
            BannerArray:[],         // 宝贝页面轮播图数据
            xq:'',                  // 详情
            name:'',                // 产品名称
            maxPrice:'',             //产品最大值
            minPrice:'',            // 产品最小值
            marketPrice:'',         // 市场价格
            table:[],
            Data:{},                // 用于redux存储数据的
        }

        let len=this.props.location.pathname.split('/').length
        this.Id=this.props.location.pathname.split('/')[len-1]


        this.handleChange=this.handleChange.bind(this)
    }

    goBack(){
        this.props.history.go(-1)
    }

    handleChange(path){
        let {history,match} = this.props;
    
        this.setState({
            current:path
        });
        history.replace(match.url+path);
    }
    async getData(){
        let Data=await this.$axios.get(`db/goods/detail/data.action?goodsId=${this.Id}`)
        Data=Data.data
        this.setState({
            BannerArray:Data.response.data.images,   
            xq:Data.response.data.introduction,
            name:Data.response.data.name,
            maxPrice:Data.response.price.maxPrice,
            minPrice:Data.response.price.minPrice,
            marketPrice:Data.response.data.marketPrice,
            table:Data.response.data.parameter,
            Data:Data.response.data
        },function(){
            console.log(this.state.Data)
        })
   




    }
    
    componentWillMount(){
        this.getData();

        // 再次刷新的时候防止当前高亮与当前的路由对接不上
        let hash = window.location.hash.replace('#'+this.props.match.url,'');
        let Id=this.props.location.pathname;
  
        if(Id.indexOf('/product')===-1){
            
            let tabs=[
                {
                    text:'宝贝',
                    path:'/product/'+this.Id
                },{
                    text:'详情',
                    path:'/img/'+this.Id
                },{
                    text:'参数',
                    path:'/parameter/'+this.Id
                },{
                    text:'评论',
                    path:'/comment/'+this.Id
                }
              ]
              this.setState({
                current:hash,
                tabs:tabs,
              
            })
           
           return
        }
        else{
          let hash=Id.slice(Id.indexOf('/product'));
          let tabs=[
            {
                text:'宝贝',
                path:'/product/'+this.Id
            },{
                text:'详情',
                path:'/img/'+this.Id
            },{
                text:'参数',
                path:'/parameter/'+this.Id
            },{
                text:'评论',
                path:'/comment/'+this.Id
            }
          ]
          this.setState({
            current:hash,
            tabs:tabs,
           
        })
        }
    }
    componentDidUpdate(){
       
          
            let {set}=this.props;
            set(this.state.Data)
        
    }
      // 1.定义context
      getChildContext(){
        return {
            xq:this.state.xq
        
        }
    }

    // 2.父组件验证数据类型
    static childContextTypes = {
        xq:PropTypes.string,
     
    }

    render(){
      
        return(
            
            <div className="Details">
                 <div className="TopBar">
                    <div className="contxt">
                        <div className="classify fl">
                            <i className="iconfont icon-iconfontjiantou4" onClick={this.goBack.bind(this)}></i>
                        </div>
                        <h3>{this.state.name}</h3>
                        <i className="iconfont icon-xiazai1" ></i>
                    </div>
                </div>

                <Tabs 
                onChange={this.handleChange} 
                activeKey={this.state.current}
                animated={false}
                >
                    {
                        this.state.tabs.map(tab=>{
                            return <Tabs.TabPane tab={tab.text} key={tab.path}>
                                <Switch>
                                    <Route path={"/details/product/:id"} render={()=>
                                        <Product
                                         BannerArray={this.state.BannerArray} 
                                         xq={this.state.xq} 
                                         Id={this.Id} 
                                         name={this.state.name}
                                         maxPrice={this.state.maxPrice}
                                         minPrice={this.state.minPrice}
                                         marketPrice={this.state.marketPrice}
                                         />
                                    }  />
                                    <Route path={"/details/img/:id"}  render={()=>
                                    
                                        <Img
                                        xq={this.state.xq} 
                                        />
                                    } />
                                    <Route path={"/details/parameter/:id"}  render={()=>
                                        <Parameter table={this.state.table}/>
                                    } />
                                    <Route path={"/details/comment/:id"} render={()=>
                                        <Comment/>
                                    }/>
                                   
                                    <Redirect from={"/details"}  to="/details/product"/>
                                </Switch>
                            </Tabs.TabPane>
                        })
                    }
                </Tabs>

            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        Data:state.Details.Data
    }

}
// 设置matpDispatchToPrpos
const mapDispatchToProps =dispatch=>{
   return{
       set(data){
          console.log(dispatch)
            dispatch(DetailsActions.set(data))
       }    
   }
}
Details=connect(mapStateToProps,mapDispatchToProps)(Details)

export default Details;