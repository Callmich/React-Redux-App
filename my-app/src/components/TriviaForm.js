import React from 'react';
import { connect } from 'react-redux';

import { getData } from "../actions/triviaActions"
import {  Button } from 'reactstrap';


const TriviaForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }


    return (
      <div >
          {props.isFetchingData ? (<div>I swear I left those trivia questions somewhere</div>): (
          <Button onClick={handleGetData}>Find some Questions</Button>)}
      </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(TriviaForm)