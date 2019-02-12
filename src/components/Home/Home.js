import React,{Component} from 'react';
import qs from 'qs';


import 'd/less/Home/index.less';
// import '@/less/commons/TopBar.less'
// ---------------------------引入组件
import Banner from './common/Banner';        // 轮播图
import Category from './common/Category';    // 分类 
import Tendency from './common/Tendency';    // 趋势
import Goods from './common/Goods';          // 商品列表
import Popularity from './common/Popularity';   //人气商家
import TopBar from '../commons/TopBar';         //公用topBar
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
// ---------------------------引入组件 END
class Home extends Component{
    constructor(){
        super();
        this.state={
            BannerList:[],       // 轮播图数据
            CategoryList:[
                {
                    name:'衬衫面料',
                    img:require("d/img/index05.jpg"),
                    id:70
                },
                {
                    name:'连衣裙面料',
                    img:require("d/img/index05.jpg"),
                    id:71
                },
                {
                    name:'大衣面料',
                    img:require("d/img/index05.jpg"),
                    id:72
                },
                {
                    name:'棉羽绒面料',
                    img:require("d/img/index05.jpg"),
                    id:73
                },
                {
                    name:'卫衣面料',
                    img:require("d/img/index05.jpg"),
                    id:74
                },
                {
                    name:'全款式面料',
                    img:require("d/img/index05.jpg"),
                    id:75
                },
                
            ],                   // 商品分类数据
            TendencyList:[],    // 趋势面料数据
            Women:[],           // 商品女装数据
            MemWear:[],         // 商品男装数据
            ChdWear:[],         // 商品童装数据
            Japan:[],            //商品日本数据
            Korea:[],           // 商品韩国数据
            Europe:[],          // 商品欧洲数据

        }
    }
    async componentWillMount(){
        
    
    
       let Banner = await this.$axios.post('/a/ai/test/profile')
       let Tendency= await this.$axios.get('/a/ai/test/tendency');
       let GoodsList1=await this.$axios.get('/a/ai/test/GoodsList1');
       GoodsList1=GoodsList1.data.data
       let GoodsList2=await this.$axios.get('/a/ai/test/GoodsList2')
       GoodsList2=GoodsList2.data.data;
     
   
        this.setState({
            BannerList:Banner.data.data,
            TendencyList:Tendency.data.data,
            Women:GoodsList1.womenWear,
            MemWear:GoodsList1.memWear,
            ChdWear:GoodsList1.chdWear,
            Japan:GoodsList2.japan,
            Korea:GoodsList2.korea,
            Europe:GoodsList2.europe,

        },()=>{
            // console.log(this.state.GoodsList1)
        })

        // ------------------ 处理 轮播图swiper
        let swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            disableOnInteraction: false,
          },
            pagination: {
              el: '.swiper-pagination',
            },
          });
        // ------------------ 处理 轮播图swiper END
        

    }

   componentDidMount(){
       
    const options = {
        scrollY: false, // 因为scrollY默认为true，其实可以省略
        scrollX: true,
        click: true,
        cancelable:true,
        eventPassthrough: "vertical",
        startX: 0,
      }
     let DOM=document.querySelectorAll('.wrapper');
     for(let i=0;i<DOM.length;i++){
        let scroll = new BScroll(DOM[i],options)
     }

      let scroll = new BScroll(document.querySelector('.Tendency'),options)
   }
    render(){
        
        return(
            <div className="Home">
                <TopBar link={'/classify'} leftNmae={'分类'} leftIcon={'iconfont icon-icon04'}/>
                <Banner BannerList={this.state.BannerList}/>
                <div className="bigTitle">
                    <div className="con">
                        <span className="line"></span>
                        <span className="text">根据款式找面料</span>
                        <span className="line"></span>
                    </div>
                </div>

         
                <Category CategoryList={this.state.CategoryList}/>
              

                <div className="bigTitle">
                    <div className="con">
                        <span className="line"></span>
                        <span className="text">根据趋势找面料</span>
                        <span className="line"></span>
                    </div>
                </div>

                <Tendency TendencyList={this.state.TendencyList}/>

                <div className="bigTitle">
                    <div className="con">
                        <span className="line"></span>
                        <span className="text">根据人群找面料</span>
                        <span className="line"></span>
                    </div>
                </div>

                <Goods data={this.state.Women} Title={require("d/img/ladies.jpg")} guige={'米'} name={'女装面料'}  />   
                {/* 女装面料 */}

                <Goods data={this.state.MemWear} Title={require("d/img/gentlemen.jpg")} guige={'米'} name={'男装面料'} />   
                {/* 男装面料 */}

                <Goods data={this.state.ChdWear} Title={require("d/img/kids@0.5x.jpg")} guige={'个'} name={'童装面料'} />   
                {/* 童装面料 */}

                <Goods data={this.state.Japan} Title={require("d/img/japan@0.5x.jpg")} guige={'米'} name={'日本面料'} />   
                {/* 日本面料 */}

                <Goods data={this.state.Korea} Title={require("d/img/korea@0.5x.jpg")} guige={'匹'} name={'韩国面料'} />   
                {/* 韩国面料 */}

                <Goods data={this.state.Europe} Title={require("d/img/europe@0.5x.jpg")} guige={'米'} name={'欧洲面料'} />   
                {/* 欧洲面料 */}


                <div className="bigTitle">
                    <div className="con">
                        <span className="line"></span>
                        <span className="text">人气商家</span>
                        <span className="line"></span>
                    </div>
                </div>

                <Popularity/>

                <div className="footer">
                    <p className="kefu">客服热线</p>
                    <p className="phone">400-823-3090</p>
                    <button>下载优料宝APP</button>
                    <p className="banquan">优料宝版权所有 ©2004-2020 沪ICP备06003020号-17</p>
                </div>
            </div>
        )
    }
}

export default Home