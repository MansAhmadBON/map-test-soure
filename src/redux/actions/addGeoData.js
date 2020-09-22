import {ADD_GEO_DATA} from "../../constants";

const addGeoData = geoData => {
    return (dispatch) => {
        dispatch({type: ADD_GEO_DATA, payload: geoData})
    }
};

export default addGeoData;