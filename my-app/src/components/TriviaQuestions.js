import React from 'react';
import { connect } from 'react-redux';

const TriviaQuestions = props => {
    return (
        <div>
            {props.error ? (<div className='error'>{props.error}</div>) : (
                props.triviaData.map(question => <div>{question.question}</div>)
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        triviaData: state.triviaData,
        error: state.error
    }
}
export default connect( mapStateToProps, {} )(TriviaQuestions)