import React,{Component} from 'react';
import { Collapse } from 'antd';


class AddcartQty extends Component{
    constructor(props){
        super(props);
        
        this.state={
            nweSkuData:this.props.nweSkuData,      // 被选中的色号的产品库存信息包含名字，图片，库存等
            len:this.props.len,
            total:this.props.total
        }
        console.log(this.props)
        // this.nweSkuData=[]
    }

    // 关闭页面
    close(){
        this.setState({
            isShow:false
        })
    }
    
    // // 减数量 
    // subtract(id){
    //   let {nweSkuData}=this.props;
      

    //   let nweSku=nweSkuData.map(item=>{
    //       console.log(item,id)
    //       if(item.productId===id){
    //         if(item.moq<=1){
    //             return item
    //         }
    //         item.moq--
    //       }
    //       return item;
    //   })
      
    //   // 计算总数 
    //   let len=0;
    //   for(let i=0;i<nweSkuData.length;i++){
    //       len+=nweSkuData[i].moq;
    //   }

    //   let total=0;
    //   for(let i=0;i<nweSkuData.length;i++){
    //     total+=nweSkuData[i].price;
    // }
    //    this.setState({
    //        nweSkuData:nweSku,
    //        len,
    //        total
    //      })
      
     
    // }

    // // 加数量
    // add(id){
    //     let {nweSkuData}=this.props;
        
    //     // 加数量
    //     let nweSku=nweSkuData.map(item=>{
    //         console.log(item,id)
    //         if(item.productId===id){
    //             if(item.moq>=item.stock){
    //                 return item
    //             }
    //           item.moq++
    //         }
    //         return item;
    //     })

        
    //       // 获取有所数量
    //    let len=0;
    //    for(let i=0;i<nweSkuData.length;i++){
    //        len+=nweSkuData[i].moq;
    //    }
    //    let total=0;
    //    for(let i=0;i<nweSkuData.length;i++){
    //      total+=nweSkuData[i].price;
    //  }
    //     this.setState({
    //         nweSkuData:nweSku,
    //         len,
    //         total
    //       })
    // }

    // 选用componentDidUpdate 是因为这个声明周期只要有
    // 引用的state获取props修改了并且shouldComponentUpdate返回true
    // 就会触发
    componentWillUpdate(){
      
        // let {specGroupList,skuData}=this.props;
        // // console.log(specGroupList,skuData)
        // let newSpecGroupList=[]
        // let nweSkuData=[]
        // // 筛选出被选中的商品id
        // specGroupList.forEach(item => {
        //     if(item.checked){
        //         newSpecGroupList.push(item)
        //     }
        // });
  

        // // 拿商品id与库存的id对比 这种只能在数组内容是字符串或者数字
        // //  nweSkuData = skuData.filter((item)=>{
        // //     return newSpecGroupList.includes(item.key.slice(1,-1))
        // //   })

        // for(var i=0;i<skuData.length;i++){
        //     for(var o=0;o<newSpecGroupList.length;o++){
        //         if(skuData[i].key.slice(1,-1) == newSpecGroupList[o].attrValueId){
        //             nweSkuData.push({...skuData[i],...newSpecGroupList[o]})
        //         }
        //     }
        // }

        // this.nweSkuData=nweSkuData
      

        // console.log(this.nweSkuData)

       
    }
    
    render(){
        let {isShow,isShowCalbalck,nweSkuData,len,changeSubtract,Add}=this.props;
       
        return(
            <div className="AddcartQty" style={{display:isShow===true?'block':'none'}}>
                <div className="mask">

                </div>
                <div className="card-dialog">

                        <div className="card-dialog-title con">
                            <p>确定数量</p>
                            <i className="iconfont icon-shanchu" onClick={isShowCalbalck}></i>
                        </div>
                       


                        <div className="card-content">
                            <ul className="con">
                                {
                                    nweSkuData.map(item=>{
                                        return(
                                            <li key={item.attrValueId}>
                                                <div className="left">
                                                    <img src={item.imageUrl} alt="图片" style={{display:item.imageUrl?'block':'none'}}/>
                                                    <div className="info">
                                                        <p className="title">{item.specName}</p>
                                                        <p className="guige">
                                                            <span className="price">
                                                                ￥{item.price}
                                                            </span>
                                                            <span className="kuncun">
                                                                库存:{item.stock}
                                                            </span>
                                                        </p>
                                                        <p className="other">
                                                            起售量必须≥1米
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button className="subtract" onClick={()=>{
                                                        changeSubtract(item.productId)
                                                    }}>-</button>
                                                    <span>{item.moq}</span>
                                                    <button className="add" onClick={()=>{
                                                        // console.log(item.productId)
                                                        Add(item.productId)
                                                    }}>+</button>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                               
                            </ul>

                            <div className="goods_num con">
                                共<em>{nweSkuData.length}</em>种共<em>{this.props.len}</em>米<span>￥{this.props.total}</span>
                            </div>
                            <button className="commit">加入购物车</button>
                        </div>
                   
                </div>
                
            </div>
        )
    }
}

export default AddcartQty;