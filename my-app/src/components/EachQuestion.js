import React, { useState } from 'react';

import { Col, Card, CardText, CardTitle, Button } from 'reactstrap';



const EachQuestion = props => {
    const [answer, setAnswer] = useState(false)

    return (

        <div>
            <Col sm="6">
                <Card body>
                    <CardTitle> Question: {props.question.question} </CardTitle>
                    <div>
                    {answer ? (<CardText > {props.question.correct_answer}</CardText>) : (<div>Click Below for the answer</div>)}
                    </div>
                    <Button onClick={() => setAnswer(true)} >Answer</Button>
                </Card>
            </Col>
        </div>


    )
}

export default EachQuestion
