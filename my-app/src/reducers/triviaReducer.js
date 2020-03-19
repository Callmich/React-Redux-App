import { FETCH_DATA, UPDATE_TRIVIA, SET_ERROR } from '../actions/triviaActions'

const initialState = {
    triviaData: [],
    isFetchingData: false,
    error: '',
    displayAnswer: false
};

export const triviaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                triviaData: [],
                displayAnswer: false
            };
        case UPDATE_TRIVIA:
            return {
                ...state,
                triviaData: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }

        default:
            return state;
    }
};