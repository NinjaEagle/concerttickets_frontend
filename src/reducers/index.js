import { ADD_CONCERT } from '../constants/action-types';

const initialState = {
    concerts: [],
    users: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CONCERT) {
        return Object.assign({}, state, {
            concerts: state.concerts.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;
