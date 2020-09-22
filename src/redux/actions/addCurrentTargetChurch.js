import {ADD_CURRENT_TARGET_CHURCH} from '../../constants';

const addCurrentTargetChurch = church => ({type: ADD_CURRENT_TARGET_CHURCH, payload: church});

export default addCurrentTargetChurch;