import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx';
import TreeBoard from '../components/treeBoard.jsx';


class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextState,nextProps){
    console.log('sCompUp? next state: ', nextState);
    return nextState.hasNewInput;
  }

  componentDidUpdate(prevProps,prevState){
    console.log('updated board container!');
  }

  render() {
    return(
      <Well id="boardContainer">
      { true ? (
        <BubbleBoard object = {this.props.inputData} name={'Test Data'}/>
      ) : (
        <TreeBoard object = {this.props.inputData} />
      )}
      </Well>
    )
  }


}

const mapStateToProps = store => ({
  //provide pertinent state here
  inputData: store.bubble.inputJSON,
  hasNewInput: store.bubble.renderBoard
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

