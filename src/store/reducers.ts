/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import { data } from '../data/data';

const initialState = {
    language: 'ru',
    reviews: data
};

const languageReducer = (state = initialState.language, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    language: languageReducer,
    reviews: (state = initialState.reviews) => state
});

export default rootReducer;