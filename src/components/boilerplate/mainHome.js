import React, { Component } from 'react';
import Counter from './CounterButtons.js';


class ArtistMain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          Hello World - Simple Redux Example
        </div>
        <Counter />
      </div>
    );
  }
}

export default ArtistMain;
