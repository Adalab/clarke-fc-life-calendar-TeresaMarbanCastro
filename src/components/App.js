import React, { Component } from 'react';
import '../scss/main.css';
import Calendar from './Calendar.js';
import Editor from './Editor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <Editor />
      </div>
    );
  }
}

export default App;
