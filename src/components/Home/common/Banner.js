import React,{Component} from 'react';



import 'd/less/Home/index.less'


class Banner extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
   
    render(){
        let {BannerList}=this.props;
       
        return(
            <div className="swiper-container">
            <div className="swiper-wrapper">
            <div className="swiper-slide">
                {
                    BannerList.map(item=>{
                       
                       
                        return <img src={item.Img} key={item.id} alt="图片"/>
                    })
                }
            </div>
            
            </div>
      
            <div className="swiper-pagination"></div>
        </div>
        )
    }
}
//  let Banner=function Banner({BannerList}){
//     console.log(BannerList)
//     return(
        
//     <div className="swiper-container">
//         <div className="swiper-wrapper">
//         <div className="swiper-slide">
//             {
//                 BannerList.map(item=>{
//                     let dd=import((item.Img))
//                     return <img src={dd} key={item.id} alt="图片"/>
//                 })
//             }
//         </div>
        
//         </div>
  
//         <div className="swiper-pagination"></div>
//     </div>
           
 
           
       

//     )
// }


export default Banner
