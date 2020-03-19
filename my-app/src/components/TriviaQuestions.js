import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardText, CardTitle, Button } from 'reactstrap';
import { answerQuestion } from '../actions/triviaActions'

const TriviaQuestions = props => {
    const [answer, setAnswer] = useState(false)

    return (
        <div>
                    {props.error ? (<div className='error'>{props.error}</div>) : (
                    props.triviaData.map(question => (
                        <Col key={question.question} sm="6">
                            <Card body>
                                <CardTitle> Question: {question.question} </CardTitle>
                                <div>
                                {answer ? (<CardText > {question.correct_answer}</CardText>) : (<div>Click Below for the answer</div>)}
                                </div>
                                <Button onClick={(key) => setAnswer(true)} >Answer</Button>
                            </Card>
                        </Col>))
                    )}
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