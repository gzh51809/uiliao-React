import {SET_DATA} from '../actions/Details'

let defaultState={
    Data:{}         //在Details页面存储数据，在添加购物车页面的时候使用数据
}

let reducer=function(state=defaultState,action){
   
    switch(action.type){
        
        case SET_DATA:
        
            return{
                ...state,
                Data:action.payload
            }
            default:
       
                return state;
    }
}
export default reducer;