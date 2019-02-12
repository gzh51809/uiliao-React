import { combineReducers } from "redux";

// 引入reducer
import calssfiyReducer from './Classify';
import DetailsReducer from './Details'

// 把多个reducer组合成一个reducer

const rootReducer = combineReducers({
    classfiy:calssfiyReducer,
    Details:DetailsReducer
});

export default rootReducer;