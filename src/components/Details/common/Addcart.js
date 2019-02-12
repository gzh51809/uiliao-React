import React,{Component} from 'react';
import {connect} from 'react-redux';


import 'd/less/Addcart/Addcart.less'
class Addcart extends Component{
    constructor(){
        super()
        this.state={
            goods:{},            // 商品名字价格等信息
            specGroupList:[],    // 规格色号
            relateData:[],      //  购买单位
            relateItems:[],
            checkedArray:[]    // 控制色号是否被选中
        }
        this.onoff=false;
    }
    goProduct(){
        let {history}=this.props;
        history.go(-1);
    }
    unitToggle(name){
        if(this.onoff){
            return
        }
        this.onoff=true;
       this.getData(name)
    }
    checked(id){
        
        console.log(this.state.specGroupList)
       let Checked=this.state.specGroupList
      
        Checked.forEach(item=>{
            if(item.specId===id){
                item.checked=!item.checked
            }
        })
        this.setState({
            specGroupList:Checked
        })
        console.log(Checked)
        
        
    }
    async getData(id){
        
        let Data=await this.$axios.get('/db/goods/data.action?goodsId='+id)
       
      if(Data.data.response.code===200){
        Data=Data.data.response
        this.onoff=false;
       
   
        let sehao=Data.specGroupList[0].specList;
    
        for(let i=0;i<sehao.length;i++){
            sehao[i].checked=false
        }

        console.log(sehao)
        this.setState({
            goods:Data.goods,
            specGroupList:sehao,
            relateData:Data.relateData,
            relateItems:Data.relateData.relateItems,
            

        },function(){
            console.log(this.state.checkedArray,this.state.specGroupList)
        })
      }
      else{
          alert('请求错误')
      }
    }
    componentWillMount(){
      
        let {location}=this.props;
        let id=location.search.split('=')[1];
     
        this.getData(id)
    }
    
    render(){
        return(
            <div className="Addcart">
                <div className="cart-top">
                    <div className="cart-img">
                        <img src={this.state.goods.image}  alt="图片"/>
                    </div>  
                    <div className="card-info">
                        <div className="cart-text">
                            <div className="cart-title">
                                {this.state.goods.name}
                            </div>
                            <div className="cart-pirce">
                                    ¥{this.state.goods.price}
                            </div>
                        </div>
                        <div className="cart-close" onClick={this.goProduct.bind(this)}>
                                <i className="iconfont icon-shanchu"></i>
                        </div>
                    </div>
                </div>
                
                <div className="card-content">
                    <div className="title">
                        色号
                    </div>
                    <ul>
                        {
                            this.state.specGroupList.map(item=>{
                              if(item.large){
                                return(
                                    <li key={item.specName} className="img">
                                        <img src={item.large} alt="图片"/>
                                       <p>{item.specName}</p>
                                    </li>
                                )
                              }else{
                                  return(
                                    <li key={item.specName} className="text">
                                      
                                       <p onClick={this.checked.bind(this,item.specId)} className={item.checked===true?'checked':''}>{item.specName}</p>
                                    </li>
                                  )
                              }
                                
                            })
                        }
                      
                    </ul>
                </div>
            
                <div className="card-bottom">
                    <div className="card-bottom-wrap">
                        <div className="card-size">
                            <span>{this.state.relateData.name}</span>
                           
                            <div className="size-checked">
                                {   
                           
                                    this.state.relateItems.map(item=>{
                                        
                                        return(
                                            <span key={item.goodsId} className={item.isSelected===true?'active':''} onClick={this.unitToggle.bind(this,item.goodsId)}>
                                                {item.relateName}
                                            </span>
                                        )
                                    })
                                    
                                }
                               
                            </div>
                        </div>
                        <div className="card-submit">
                            确认数量
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        Data:state.Details.Data
    }

}
Addcart=connect(mapStateToProps)(Addcart)
export default Addcart;