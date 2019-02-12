import React,{Component} from 'react';
import Goods from '../../Home/common/Goods';

class GoodsList extends Component{
    constructor(){
        super();
        this.state={
            isLoading:false,
            isEnd:false,
            triggerDistance:80,
        }
    }
    componentDidMount(){
    
        this.refs.scroll.addEventListener("scroll",()=>{
            var distance = this.refs.scroll.scrollHeight-(this.refs.scroll.scrollTop +this.refs.scroll.clientHeight)
            // console.log(distance)
            let {isLoading,isEnd,triggerDistance}=this.state
            if( !isLoading && !isEnd && distance < triggerDistance){
                console.log(6666)
                this.props.getData()
            }
        })
       
    }
    render(){
        let {Goodslist,getData,goto}=this.props;
        
        return(
            <div className="GoodsList con" ref="scroll">
              
                <ul>
                {
                   
                    Goodslist.map(item=>{
                        return (
                            <li key={item.goodsId} onClick={goto.bind(this,item.goodsId)}>
                                <img src={item.image} alt="图片"/>
                                <p className="titel">
                                    {item.name}
                                </p>
                                <div className="price">
                                    <span className="mater_smSize">
                                        ￥
                                    </span>
                                    {item.price}
                                    <span className="unit">
                                        /{item.unit}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
                    
                </ul>
            </div>
        )
    }
}

export default GoodsList;