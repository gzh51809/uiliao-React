import React from 'react';


let LeftMenu=function({handerClick,data,current}){
 
    return(
        
        <div className="LeftMenu">
            <ul>
                {
                    data.map(item=>{
                        return (
                            <li key={item.name}>
                                <a href="javascrip:;" title="测试" onClick={handerClick.bind(this,item.name)} className={current===item.name?'active':''}>{item.name}</a>
                            </li>
                        )
                    })
                }
               
              
            </ul>
        </div>
    )
}

export default LeftMenu;