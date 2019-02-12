import React from 'react';

let Parameter=function({table}){
   
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