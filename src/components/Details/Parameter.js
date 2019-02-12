import React from 'react';

let Parameter=function({table}){
   if(!table){
     
       return(
           <div>
            <img src={require('d/img/noData_bg_1.09715f8.png')} alt="图片"/>
           </div>
       )
   }

    return(
       
        <div className="Parameter con">
        
            <table border="1">
                <tbody>
                    {
                      
                        table.map((item,idx)=>{
                             
                            return(
                                <tr key={idx}>
                                  <td className="color">
                                    {item.name}
                                  </td>
                                  <td>
                                      {item.value}
                                  </td>
                                </tr>

                            )
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default Parameter;