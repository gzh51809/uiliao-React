import React from 'react';


let Tendency=function({TendencyList}){
    return(
        <div className="Tendency">
            <div className="con">
                {
                    
                    TendencyList.map(item=>{
                        return (
                            <div className="item swiper-slide" key={item.categoryId}>
                                <img src={item.coverPic} alt="图片"  />
                                <p className="trend-discrip">{item.title}</p>
                                <p className="trend-title">达人街拍</p>
                            </div>
                        )
                    })
                }
            </div>
        
           
        </div>
    )
}


export default Tendency;