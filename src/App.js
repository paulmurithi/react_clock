import React, { Component } from 'react';
import './index.css'
import Clock from '../src/components/Clock';

class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      numbers: [ 10, 14, 75, 4, 87, 2, 45, 78, 35, 24 ]
    }
  }
  render () {
    return (
      <div className="App">
        <Clock />
        <h2 id="list">An example on how to use lists.</h2>
        { this.state.numbers.map( ( number, index ) =>
          <li key={ index }>number { number }.</li>
        ) }
      </div>
    );
  }
}

export default App;
