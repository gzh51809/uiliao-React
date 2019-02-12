import React from 'react';


let Info=function({name,maxPrice,minPrice,marketPrice}){
    return(
        <div className="Info">
           
                <div className="InfoTitle">
                    <div className="con">
                        <p className="name">{name}</p>
                        <p className="price">
                            {maxPrice}~{minPrice}
                            <span>￥{marketPrice}</span>
                        </p>
                    </div>
                       
                    </div>
                    {/* 产品规格参数 */}
                    <div className="parameter">
                        <div className="con">
                            <div className="item clearfix">
                                <span className="left">已选：</span>
                                <span className="com">请选择规格</span>
                                <i className="iconfont icon-gengduo"></i>
                            </div>
                            <div className="item clearfix">
                                <span className="left">运费：</span>
                                <span className="com">不包含运费</span>
                            
                            </div>
                        </div>
                       
                    </div>

                    <div className="maijia">
                        <div className="con">
                        卖家承诺48小时内发货
                        </div>
                    </div>
                
            
        </div>
    )
}
export default Info;