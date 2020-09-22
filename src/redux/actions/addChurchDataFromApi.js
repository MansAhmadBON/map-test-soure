import {ADD_CHURCH_DATA_FROM_API} from "../../constants";

const addChurchDataFromApi = (data) => {
    return (dispatch) => {
        dispatch({type: ADD_CHURCH_DATA_FROM_API, payload: data})
    }
};

export default addChurchDataFromApi;