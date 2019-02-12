import React,{Component} from 'react';
import {connect} from 'react-redux'
import GoodsList from './common/GoodsList'
import 'd/less/ClassifyList/ClassifyList.less'
import qs from 'qs';
import Loading from 'd/components/commons/Loading.js'
class ClassifyList extends Component{
    constructor(){
        super();
        this.state={
            Goodslist:[],
            page:1,
            isEnd:false,
            isLoading:0
        }
        this.getData=this.getData.bind(this)
        this.goto=this.goto.bind(this)
    }
    goBack(){
        this.props.history.go(-1)
    }
    
    async getData(){
        let {location}=this.props;
        // 防止数据请求使用post方式
        // let Path=location.search.slice(1).split('&');
        // let PathObj={}
        // for(let i=0;i<Path.length;i++){
        //     let arr1=Path[i].split(':')
        //     PathObj[arr1[0]]=arr1[1]
        // }
       
        // let data = qs.stringify({
        //     'cat':PathObj.cat,
        //     'page':1,
        //     'ev':PathObj.ev
        // }) 
        // 防止数据请求使用post方式 END
        if(this.state.isEnd){
            return
        }
        this.setState({
            isEnd:true,
            isLoading:1
        })
        let Dtate=await this.$axios.get(`/db/goods/list.action${location.search}&page=${this.state.page}`)
        
        // console.log(this.props)
        let {returnCode,response}=Dtate.data
        // response.goodsList
        if(returnCode===200){
            if(response.goodsList.length<1){
                alert('没有数据了')
                this.setState({
                
                    isLoading:0
                   })
                return
            }
           this.setState({
            Goodslist:this.state.Goodslist.concat(response.goodsList),
            page:this.state.page+1,
            isEnd:false,
            isLoading:0
           },function(){
               
           })
        }else{
            alert('请求错误做单独的处理')
            this.setState({
                
                isLoading:0
               },function(){
                 
               })
        }
    }   
    componentWillMount(){
     
        // 简单的拦截处理
        let {location,history}=this.props
        if(!location.search){
            history.push('/home')
        }
        // 简单的拦截处理 END

        // 获取数据
        this.getData();

    }
    goto(id){
       
        this.props.history.push(`/details/product/${id}`)
    }
    
    render(){
        return(
            <div className="ClassifyList">
               <div className="TopBar">
                    <div className="contxt">
                        <div className="classify fl">
                        
                            <i className="iconfont icon-iconfontjiantou4" onClick={this.goBack.bind(this)}></i>
                        </div>
                        <h3>{this.props.classify}</h3>
                        
                    </div>
                </div>
                <Loading isShow={this.state.isLoading}/>
                <GoodsList Goodslist={this.state.Goodslist} getData={this.getData} goto={this.goto}/>
            </div>
        )
    }
        
    
}

const mapStateToProps=(state,ownProps)=>{
    return{
        classify:state.classfiy.classifyName
    }
}
ClassifyList=connect(mapStateToProps)(ClassifyList);
export default ClassifyList;