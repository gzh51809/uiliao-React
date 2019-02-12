import React,{Component} from 'react';
import PropTypes from 'prop-types';


let Goods=function({data,Title,guige,name}){
  
    return(
        
        <div className="Goods">
            <img src={Title} alt="图片"/>
            <div className="con">   
                <div className='wrapper' >
                    <div className="content">
                        {
                            data.map(item=>{
                                return (
                                    <div className="item"  key={item.fabricId}>
                                        <div className="Img">
                                            <img src={item.imagePaths} alt="图片"/>
                                            <i></i>
                                        </div>
                                        
                                        <p className="name">{item.fabricTitle}</p>
                                        <p className="price">￥{item.samplePrice}/{guige}</p>
                                    </div>
                                )
                            })
                        }
                        <div className="more">
                            <p className="MoreText">MOER</p>
                            <p className="MoerHtml">产看更多</p>
                            <p className="MoerHtml">{name}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

// 数据校验
Goods.propTypes={
    data:PropTypes.array.isRequired
}

export default Goods;