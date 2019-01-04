import React, { Component } from 'react';
import './App.css';
import Bar from './comps/Bar.js' ;

class App extends Component {
  onBarSubmit = (input) => {
    console.log(input) ;
  }

  render() {
    return (
      <div className="App ui container">
        <Bar onSubmit={this.onBarSubmit}/>
      </div>
    );
  }
}

export default App;
