import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { addChurchDataFromApi, addCurrentTargetChurch } from '../../redux/actions';


const Ymap = ({churchData, lat, lon, addChurchDataFromApi, addCurrentTargetChurch}) => {
    const mapState = {
        center: [lat, lon],
        zoom: 13,
    };

    useEffect(() => {
        fetch(`https://apiv4.updateparishdata.org/Churchs/?lat=${lat}&long=${lon}&pg=1`)
            .then(response => response.json())
            .then(data => {
                const churchsData = [];
                data.forEach((item) => {
                    const church = {
                        id: Date.now() + item.latitude,
                        lat: item.latitude,
                        lon: item.longitude,
                        name: item.name,
                        churchAddressStreet: item.church_address_street_address,
                        phoneNumber: item.phone_number,
                        siteURL: item.url,
                    }
                    churchsData.push(church)
                })
                addChurchDataFromApi(churchsData)
            })
            .catch(err => console.log(err));
    }, [lat, lon]);


    const clickOnPlaceMark = (id) => {
        let currentChurch = churchData.filter(item => item.id === id);
        addCurrentTargetChurch(currentChurch[0])
    };

    return (
        <YMaps>
            <div>
                <Map state={mapState} className={"ymap"}>
                    {
                        churchData.map((church) => {
                            return <Placemark
                                key={church.id}
                                geometry={[church.lat, church.lon]}
                                properties={{
                                    hintContent: church.name,
                                    balloonContentHeader : church.name,
                                    balloonContentBody: church.churchAddressStreet

                                }}
                                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageSize: [30, 42],
                                    iconImageOffset: [-3, -42],
                                }}
                                onClick={() => clickOnPlaceMark(church.id)}
                            />
                        })
                    }
                </Map>
            </div>
        </YMaps>
    )
};

const mapStateToProps = state => ({
    churchData: state.churchData.churchData,
    geoData: state.searchCity.geoData,
    lat: state.searchCity.lat,
    lon: state.searchCity.lon
});

const mapDispatchToProps = dispatch => ({
    addChurchDataFromApi: data => dispatch(addChurchDataFromApi(data)),
    addCurrentTargetChurch: church => dispatch(addCurrentTargetChurch(church))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ymap);