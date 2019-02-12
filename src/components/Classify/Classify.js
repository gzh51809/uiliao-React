import React,{Component} from 'react';
import {connect} from 'react-redux';
import qs from 'qs'
// ------------- 引入组件
import TopBar from '../commons/TopBar'
import LeftMenu from './common/LeftMenu';
import RightContent from './common/RightContent'
// ------------- 引入组件 END
import classfiyAction from '../../actions/Classify';

// ------------- 引入less
import 'd/less/classify/Classify.less'
// ------------- 引入less END

class Classify extends Component{
    constructor(){
        super();
        // console.log(this.props.classify)
        this.state={
            data:[],
            current:'棉类面料',
           
        }
        this.handerClick=this.handerClick.bind(this)
        this.goGoodsList=this.goGoodsList.bind(this)
    }

    async componentWillMount(){
 
        // let timer = Date.now();
     
        // this.$axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=zh-CN,zh;q=0.9'; 
        // let data=await this.$axios.post('/api//basedata/getTableConfig?random_numbers=0.1283478780916596',{}
          
        // );
        // console.log(data)
    
        let Date=await this.$axios.post('/a/ai/test/classify');
        Date=Date.data.data
       
        this.setState({
            data:Date
           
        })

        // classfiyAction.change(Date[0].name)
    //   this.props.dispatch(classfiyAction.change(Date[0].name));
        this.setState({
            current:this.props.classify
        
        })
      
    }
    // 处理a标签的跳转
    handerClick(name,e){
     
        // this.setState({
        //     current:name
        // })
        this.props.dispatch(classfiyAction.change(name));
   
        e.preventDefault()
    }

    // 跳转到商品列表页,需要传 cat的值以及ev值
    goGoodsList(val){
        
        let pathStr=''
        for(let i in val){
            pathStr+=`${i}=${val[i]}&`;
           
        }
        pathStr=pathStr.slice(0,-1)
        this.props.history.push('/list?'+pathStr)
    }
    render(){
        return(
            <div className="Classify">
                <TopBar link={'/home'} leftNmae={'首页'} leftIcon={'iconfont icon-shouyedianpujishishangcheng'}/>
                <div className="content">
                    <LeftMenu handerClick={this.handerClick} data={this.state.data} current={this.props.classify}/>
                    <RightContent data={this.state.data} Yijiname={this.state.Yijiname} current={this.props.classify} goGoodsList={this.goGoodsList}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        classify:state.classfiy.classifyName
    }
}
Classify=connect(mapStateToProps)(Classify)

export default Classify;