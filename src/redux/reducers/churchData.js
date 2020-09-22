import {ADD_CHURCH_DATA_FROM_API, ADD_CURRENT_TARGET_CHURCH} from '../../constants';

const initialState = {
    churchData: [],
    currentTargetChurch: null
};

const churchData = (state = initialState, {type, payload}) => {
    if(type === ADD_CHURCH_DATA_FROM_API){
        return {
            ...state,
            churchData: [...payload]
        };
    } else if(type === ADD_CURRENT_TARGET_CHURCH){
        return {
            ...state,
            currentTargetChurch: payload
        }
    }
    return state
};

export default churchData;