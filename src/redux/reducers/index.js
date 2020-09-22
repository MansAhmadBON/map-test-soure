import churchData from "./churchData";
import searchCity from "./searchCity";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    churchData,
    searchCity
});

export default rootReducer;