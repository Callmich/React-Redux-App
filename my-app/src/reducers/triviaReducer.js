import { FETCH_DATA, UPDATE_TRIVIA, SET_ERROR, ANSWER_QUESTION } from '../actions/triviaActions'

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
        case ANSWER_QUESTION:
            console.log(state);
            return {
                ...state,
                displayAnswer: true
            }

        default:
            return state;
    }
};