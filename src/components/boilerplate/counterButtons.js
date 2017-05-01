import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrememtCounter, decrementCounter } from '../../actions/index';
import { bindActionCreators } from 'redux';


class CounterButtons extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.incrememtCounter}>+</button>
        <button onClick={this.props.decrementCounter}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrememtCounter: incrememtCounter,
    decrementCounter: decrementCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
