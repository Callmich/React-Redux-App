import { FETCH_DATA } from '../actions/triviaActions'

const initialState = {
    jokeData: [],
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
                jokeData: [],
                displayAnswer: false
            }

        default:
            return state;
    }
};