import React from "react";
import {connect} from 'react-redux';
import {WindowDataChurch} from '../../components';
import Ymap from '../Ymap';
import FormGeolocation from "../FormGeolocation";


const App = ({currentTargetChurch}) => {
    return (
        <div>
            <FormGeolocation />
            {
                currentTargetChurch && <WindowDataChurch
                    name={currentTargetChurch.name}
                    address={currentTargetChurch.churchAddressStreet}
                    phone={currentTargetChurch.phoneNumber}
                    url={currentTargetChurch.siteURL}
                />
            }
            <Ymap />
        </div>
    )
};

const mapStateToProps = state => ({
    currentTargetChurch: state.churchData.currentTargetChurch
})

export default connect(
    mapStateToProps,
    null
)(App);