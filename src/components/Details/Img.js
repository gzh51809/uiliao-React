import React,{Component} from 'react';
import PropTypes from 'prop-types'

class Img extends Component{
    constructor(){
        super()
        this.timer=null;
        
    }
      // 3.需要使用的组件：子组件验证数据类型
      static contextTypes={
        xq:PropTypes.string,
       
    }
    componentDidMount(){
   
        this.refs.xq.innerHTML=this.context.xq;
    }
    componentDidUpdate(){
        // 这里做处理是因为刷新的时候拿不到值，所以我这里的操作是等引用的this.context有值的修改可以触发该函数
      
            this.refs.xq.innerHTML=this.context.xq;
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
  
    render(){
        
        return(
            <div className="xq21" ref="xq">1</div>
        )
    }
}
export default Img;