import React from 'react';

export const formReducer = (state, action) => {
    switch(action.type){
        case 'update': return {...state, data: action.data};
        default: return state;
    }
}

export const sharedContext = React.createContext('something');
