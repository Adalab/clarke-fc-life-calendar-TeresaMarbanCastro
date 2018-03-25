import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/main.css';
import Calendar from './Calendar.js';
import Editor from './Editor.js';

class App extends Component {
  constructor(props){
    super(props);

    // this.handleFeelingsChange = this.handleFeelingsChange.bind(this);
    this.handleCalendar = this.handleCalendar.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSad = this.handleSad.bind(this);
    this.handleHappy = this.handleHappy.bind(this);
    this.handleSaveInfo = this.handleSaveInfo.bind(this);
    this.state = {
      // selectedOption: 'happy',
      arrayDates: [],
      arrayDays: [],
      message: '',
      valueDate: '',
      happyFace: true

    }
  }
  // handleFeelingsChange(event) {
  //   this.setState({
  //     selectedOption: event.target.value
  //   })
  // }

handleCalendar(event){
  this.setState({
    valueDate: event.target.value
  })
}

handleMessage(event) {
  this.setState({
    message: event.target.value
  })
}

handleHappy(event) {
  this.setState({
    happyFace: 'happy'
  });

  let missingMensage = document.querySelector('.box-message');
  missingMensage.hidden = false;
}

handleSad(event) {
  let missingMensage = document.querySelector('.box-message');
  missingMensage.hidden = true;
  this.setState({
    happyFace: 'sad'
  });

}
handleSaveInfo() {
  const saveDate = this.state.valueDate;
  let saveMessage = this.state.message;
  const saveFace = this.state.happyFace;
  if(saveFace == "sad"){
    saveMessage = '';
  }
  const object = {
    'valueDate': saveDate,
    'message': saveMessage,
    'happyFace': saveFace
  }

  let daysInfo = JSON.parse(localStorage.getItem("daySelectMamen"));

  if (daysInfo == null) daysInfo = [];

  localStorage.setItem("object", JSON.stringify(object));

  daysInfo.push(object);
  localStorage.setItem("daySelect", JSON.stringify(daysInfo));
}


render() {
  let daysInfo = JSON.parse(localStorage.getItem("daySelect"));
  if(daysInfo == null)  daysInfo = [];
  return (
    <div className="App">
      <header className="header-app">
        <h1 className="title-app">Life Calendar</h1>
      </header>
      <div class="navigation">
        <h2 className="nav_calendar">Calendario</h2>
        <ul className="nav">
          <li className="add__li"><Link className="add__feelings" to='/addFace'>+</Link></li>
        </ul>
      </div>
      <main>
        <Switch>
          <Route exact path='/addFace' render={() =>
            <Editor
              onChangeCalendar={this.handleCalendar}
              onChangeMessage={this.handleMessage}
              // onChangeHappy={this.handleHappy}
              // onChangeSad={this.handleSad}
              onChangeSaveInfo={this.handleSaveInfo}
              calendar={daysInfo}
            />}
          />
        <Route path='/' render={() =>
          <Calendar
            calendar={daysInfo}
          />}
        />
         <Route path='/addFace' component={ App } />
         <Route exact path='/' component={ Calendar } />
       </Switch>
    </main>
    </div>
    );
  }
}

export default App;
