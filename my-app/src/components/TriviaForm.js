import React from 'react';
import { connect } from 'react-redux';


const TriviaForm = props => {


    return (
      <div>
          <button>Find some Questions</button>
      </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, {})(TriviaForm)