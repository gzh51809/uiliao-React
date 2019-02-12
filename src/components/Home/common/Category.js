import React from 'react';


let Category=function({CategoryList}){
    
    return(
       
        <div className="Category">
            <div className="con">
                {
                  
                    CategoryList.map(item=>{
                        
                        return(
                            <div className="Fabric" key={item.id}>
                                <img src={item.img} alt="分类"/>
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
               
               
                
            </div>
        </div>
    )
}


export default Category;