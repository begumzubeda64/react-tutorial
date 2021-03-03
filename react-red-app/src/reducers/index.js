import { combineReducers } from "redux";
import { HELLO_WORLD } from "../actions";


const helloWorld = (state = { message: 'Hello' }, action) => {
    switch(action.type) {
        case HELLO_WORLD:
            console.log('Hello world action');
            return Object.assign({}, state, {
                message: 'Hello World'
            });
        default:
            return state;
    }
}

const Profile = (state = { profile: {} }, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            console.log('Profile action');
            return Object.assign({}, state, {
                profile: action.payload
            });
        default:
            return state;
    }
}

const RootReducer = combineReducers({ //combining all reducers into diff state
    helloWorld: helloWorld,
    profile: Profile
});

export default RootReducer;