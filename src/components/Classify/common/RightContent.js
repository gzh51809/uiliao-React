import React,{Component} from 'react';

let RightContent=function({data,current,goGoodsList}){
    return(
        <div className="RightContent">
        {
           data.map(item=>{
             return(
                 <ul style={{'display':current===item.name?'block':'none'}} key={item.name} className="con">
                     {
                       item.data.map(Item=>{
                           
                           return (
                                   <li key={Item.name}>
                                      <p>{Item.name}</p>
                                      <ul>
                                          {
                                              Item.data.map(ITem=>{
                                                
                                              

                                               return(
                                                   <li key={ITem.name} onClick={()=>{
                                                       goGoodsList(ITem.params)
                                                   }}>{ITem.name}</li>
                                               )
                                              })
                                          }
                                      </ul>
                                        
                                      
                                   </li>
                               )
                          
                       })
                        
                     }
                 </ul>
             )
         })
        }
           
           
       </div>
    )
}



export default RightContent;