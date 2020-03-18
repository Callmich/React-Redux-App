import React from 'react';
import { connect } from 'react-redux';

import { getData } from "../actions/triviaActions"


const TriviaForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }


    return (
      <div>
          {props.isFetchingData ? (<div>I swear I left those trivia questions somewhere</div>): (
          <button onClick={handleGetData}>Find some Questions</button>)}
      </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(TriviaForm)