import {SEARCH_CITY, ADD_GEO_DATA, DEFAULT_LAT, DEFAULT_LON} from '../../constants';

const initialState = {
    city: '',
    geoData: null,
    lat: DEFAULT_LAT,
    lon: DEFAULT_LON
};

const searchCity = (state = initialState, {type, payload}) => {
    if(type === SEARCH_CITY){
        return {
            ...state,
            city: payload
        }
    } else if(type === ADD_GEO_DATA){
        return {
            ...state,
            geoData: payload,
            lat: payload.lat,
            lon: payload.lon
        }
    }
    return state
};

export default searchCity;
