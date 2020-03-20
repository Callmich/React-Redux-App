import React, { useState } from 'react';

import { Col, Card, CardText, CardTitle, Button } from 'reactstrap';



const EachQuestion = props => {
    const [answer, setAnswer] = useState(false)

    return (

        <div>
            <Col sm="6" className="card">
                <Card body>
                    <CardTitle className='question'> Question: {props.question.question} </CardTitle>
                    <div>
                    {answer ? (<CardText className='answ'> {props.question.correct_answer}</CardText>) : (<div>Click Below for the answer</div>)}
                    </div>
                    <Button className="butt" onClick={() => setAnswer(true)} >Answer</Button>
                </Card>
            </Col>
        </div>


    )
}

export default EachQuestion
