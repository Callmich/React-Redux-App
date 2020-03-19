import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_TRIVIA = "UPDATE_TRIVIA";
export const SET_ERROR = 'SET_ERROR';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get(`https://opentdb.com/api.php?amount=10`)
        .then(response => {
            console.log("Axios Call",response.data.results)
            dispatch({ type: UPDATE_TRIVIA, payload: response.data.results})
        })
        .catch(error => {
            console.log("Opps there was an error", error)
            dispatch({ type: SET_ERROR, payload: "I guess you solved all the trivia" })
        })
};

export const answerQuestion = (answer) => {
    console.log("click");
    return {type: ANSWER_QUESTION, payload:answer}
}