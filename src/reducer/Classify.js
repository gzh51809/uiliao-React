let defaultState = {
    classifyName:"棉类面料"
}
let reducer = function(state=defaultState,action){
    
    switch(action.type){
        case "CHANG_NAME":
            return {
                ...state,
                classifyName:action.payload
            }

        default:
            return state;
    }
}

export default reducer;