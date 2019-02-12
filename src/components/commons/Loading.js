import React from "react";
import ReactLoading from "react-loading";
import 'd/less/commons/loading.less';

let Loading=function({ type, color,isShow }){
    return(
        <div className="Loading" style={{display:isShow===1?'block':'none'}}>
            <div className="icon">
           {
               <p>{isShow}</p>
           }
            <ReactLoading type="spinningBubbles"  color="#fff" height={'20%'} width={'20%'} className="item"/>
            <span>正在疯狂加载</span>
            </div>
             
            
        </div>
    )
}

export default Loading;