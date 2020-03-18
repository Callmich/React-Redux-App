import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';


export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get(`https://opentdb.com/api.php?amount=10`)
        .then(response => {
            console.log("Axios Call",response)
            //SetTrivia Dispatch goes here
        })
        .catch(error => {
            console.log("Opps there was an error", error)
            //ERROR Dispatch Goes Here
        })
}