import React,{Component} from 'react';
import {connect} from 'react-redux';

import AddcartQty from './Product/AddcartQty'

import 'd/less/Addcart/Addcart.less'
class Addcart extends Component{
    constructor(){
        super()
        this.state={
            goods:{},            // 商品名字价格等信息
            specGroupList:[],    // 规格色号
            relateData:[],      //  购买单位
            relateItems:[],
            checkedArray:[],    // 控制色号是否被选中
            isShow:false,       // 控制修改数量组件的显示隐藏
            skuData:[],         // 库存数量等信息
            nweSkuData:[],      // 存放被选中数据的信息如图片名字等
            lent:1,             // 存放产品米数
            total:1,            // 存放产品价格总和
        }
        this.onoff=false;
        this.isShowCalbalck=this.isShowCalbalck.bind(this)
        this.changeSubtract=this.changeSubtract.bind(this)
        this.Add=this.Add.bind(this)
    }
    // 返回上一级
    goProduct(){
        let {history}=this.props;
        history.go(-1);
    }
    // 单位规格切换
    unitToggle(name){
        if(this.onoff){
            return
        }
        this.onoff=true;
       this.getData(name)
    }
    // 获取对应商品id 重新修改state从而重新渲染render
    checked(id,name,img=null){
        
       let Checked=this.state.specGroupList
        Checked.forEach(item=>{
            if(item.specId===id){
                item.checked=!item.checked
                item.name=name;
                item.img=null
            }
        })
        this.setState({
            specGroupList:Checked
        })



        //----------------------------------
        let {specGroupList,skuData}=this.state;
        // console.log(specGroupList,skuData)
        let newSpecGroupList=[]
        let nweSkuData=[]
        // 筛选出被选中的商品id
        specGroupList.forEach(item => {
            if(item.checked){
                newSpecGroupList.push(item)
            }
        });
  

        // 拿商品id与库存的id对比 这种只能在数组内容是字符串或者数字
        //  nweSkuData = skuData.filter((item)=>{
        //     return newSpecGroupList.includes(item.key.slice(1,-1))
        //   })

        for(var i=0;i<skuData.length;i++){
            for(var o=0;o<newSpecGroupList.length;o++){
                if(skuData[i].key.slice(1,-1) == newSpecGroupList[o].attrValueId){
                    nweSkuData.push({...skuData[i],...newSpecGroupList[o]})
                }
            }
        }
        this.setState({
            nweSkuData
        })
       
    }
    // 控制isShow显示隐藏, 判断是否有数据，设置初始值
    qurenQty(){
       
        let {specGroupList,nweSkuData}=this.state;
        let res=specGroupList.some((item)=>{
            return item.checked===true
        })
        if(!res){
            alert('请选择规格')
            return 
        }
        else{
            this.setState({
                isShow:true
            })
        }
     
         // 获取有所数量
         let len=0;
         for(let i=0;i<nweSkuData.length;i++){
             len+=nweSkuData[i].moq;
         }
         

         let total=0;
         for(let i=0;i<nweSkuData.length;i++){
            total+=nweSkuData[i].price;
       }

         this.setState({
            len,
            total
        })

        
    }
    // 传入个子组件来触发的回调函数用于控制isShow显示隐藏
    isShowCalbalck(){
        this.setState({
            isShow:false
        })
    }

    //修改数量，总和，价格函数
    changeSubtract(id){
        let {nweSkuData}=this.state;
      

      let nweSku=nweSkuData.map(item=>{
         
          if(item.productId===id){
            if(item.moq<=1){
                return item
            }
            item.moq--
          }
          return item;
      })
      
      // 计算总数 
      let len=0;
      for(let i=0;i<nweSkuData.length;i++){
          len+=nweSkuData[i].moq;
      }
   
      let total=0;
      for(let i=0;i<nweSkuData.length;i++){
         
        total+=nweSkuData[i].price*nweSkuData[i].moq;
    }
       this.setState({
           nweSkuData:nweSku,
           len,
           total
         })
      
    }

    Add(id){
              let {nweSkuData}=this.state;
       
        // 加数量
        let nweSku=nweSkuData.map(item=>{
            
            if(item.productId===id){
                if(item.moq>=item.stock){
                    return item
                }
              item.moq++
            }
            return item;
        })

        
          // 获取有所数量
       let len=0;
       for(let i=0;i<nweSkuData.length;i++){
           len+=nweSkuData[i].moq;
       }
       let total=0;
       for(let i=0;i<nweSkuData.length;i++){
        total+=nweSkuData[i].price*nweSkuData[i].moq;
     }
        this.setState({
            nweSkuData:nweSku,
            len,
            total
          })
    }
    // 请求数据函数
    async getData(id){
        
        let Data=await this.$axios.get('/db/goods/data.action?goodsId='+id)
       
      if(Data.data.response.code===200){
        Data=Data.data.response
        this.onoff=false;
        
        let sehao=Data.specGroupList[0].specList;
        
        for(let i=0;i<sehao.length;i++){
            sehao[i].checked=false
        }

   
        this.setState({
            goods:Data.goods,
            specGroupList:sehao,
            relateData:Data.relateData,
            relateItems:Data.relateData.relateItems,
            skuData:Data.skuData.productList

        },function(){
            // console.log(this.state.skuData)
        })
      }
      else{
          alert('请求错误')
      }
    }

    // 初始化数据 刷新获取id
    componentWillMount(){
      
        let {location}=this.props;
        let id=location.search.split('=')[1];
     
        this.getData(id)
    }
    

    render(){
        return(
            <div>
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
                                    <li key={item.specName} className="img" onClick={this.checked.bind(this,item.specId,item.large,item.specName)}>
                                      <div className="hezi">
                                        <img src={item.large} alt="图片"/>
                                        <div className="checkedIcon" style={{display:item.checked===true?'block':'none'}}>
                                                <i className="iconfont icon-icowodeshoucang"></i>
                                        </div>
                                        <p>{item.specName}</p>
                                      </div>
                                    </li>
                                )
                              }else{
                                  return(
                                    <li key={item.specName} className="text">
                                      
                                       <p onClick={this.checked.bind(this,item.specId,item.specName)} className={item.checked===true?'checked':''}>{item.specName}</p>
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
                        <div className="card-submit" onClick={this.qurenQty.bind(this)}>
                            确认数量
                        </div>
                    </div>
                </div>
                
                
            </div>
                <AddcartQty 
                isShow={this.state.isShow} 
                isShowCalbalck={this.isShowCalbalck} 
                specGroupList={this.state.specGroupList} 
                skuData={this.state.skuData} 
                qurenQty={this.qurenQty}
                nweSkuData={this.state.nweSkuData}                        
                len={this.state.len}
                total={this.state.total}
                changeSubtract={this.changeSubtract}
                Add={this.Add}
                />
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