import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {addNameCity, addGeoData} from '../../redux/actions';
import {URL_GEO_LOCATION} from '../../constants';


const FormGeolocation = ({searchCityName, addNameCity, addGeoData}) => {
    const [handleInpChange, setHandleInpChange] = useState('');


    useEffect(() => {
        if(searchCityName){
            fetch(`${URL_GEO_LOCATION}${searchCityName}&days=3`)
                .then(response => response.json())
                .then(data => {
                    const geolocationData = {
                        name: data.location.name,
                        lat: data.location.lat,
                        lon: data.location.lon,
                    };
                    addGeoData(geolocationData);
                })
                .catch(err => console.log(err))

        }
    }, [searchCityName]);



    const handleSubmit = e => e.preventDefault();

    const handleClick = () => {
        addNameCity(handleInpChange);
        setHandleInpChange('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                className="form__inp"
                onChange={e => setHandleInpChange(e.target.value)}
                placeholder={'city name'}
                value={handleInpChange}
            />
            <button className="form__btn" onClick={handleClick}>
                <span>Search!</span>
            </button>
        </form>
    )
};

const mapStateToProps = state => ({
    searchCityName: state.searchCity.city
});

const mapDispatchToProps = dispatch => ({
    addNameCity: city => dispatch(addNameCity(city)),
    addGeoData: geoData => dispatch(addGeoData(geoData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormGeolocation);