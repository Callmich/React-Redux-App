import React from 'react';
import { connect } from 'react-redux';

import EachQuestion from './EachQuestion'
import { Col } from 'reactstrap';

const TriviaQuestions = props => {
    
    return (
        <Col className="center">
            {props.error ? (<div className='error'>{props.error}</div>) : (
            props.triviaData.map(question => (
                <EachQuestion key={question.question} question={question}/>
            )
            ))}
        </Col>
    )
}

const mapStateToProps = state => {
    return {
        triviaData: state.triviaData,
        error: state.error,
        displayAnswer: state.displayAnswer
    }
}
export default connect( mapStateToProps, {} )(TriviaQuestions)