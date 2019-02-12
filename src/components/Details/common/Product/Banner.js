import React from 'react';

let Banner=function({BannerArray}){
   
    return(
        <div className="Banner">
           <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        BannerArray.map((item,idx)=>{
                            return(
                                <div className="swiper-slide" key={idx}> 
                                    <img src={item} alt="图片"/>
                                </div>
                            )
                        })
                    }
                   
                 
                </div>
  
             <div className="swiper-pagination"></div>
             </div>
        </div>
    )
}
export default Banner;
