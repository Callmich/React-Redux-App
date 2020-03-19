import React, { useState } from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/triviaActions'

import EachQuestion from './EachQuestion'

const TriviaQuestions = props => {
    

    return (
        <div>
                    {props.error ? (<div className='error'>{props.error}</div>) : (
                    props.triviaData.map(question => (
                        <EachQuestion question={question}/>
                    )
                    ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        triviaData: state.triviaData,
        error: state.error,
        displayAnswer: state.displayAnswer
    }
}
export default connect( mapStateToProps, { answerQuestion} )(TriviaQuestions)