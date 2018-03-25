import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './App';
import Calendar from './Calendar';
import calendarPic from '../images/calendar.png';

class Editor extends Component {
  render() {
        const all = this.props.calendar;
        return (
      <div className="editor__container">
        <div className="date__container">
          <h4 className="date__title">Fecha</h4>
          <input className="date__input" type="date" onChange={this.props.onChangeCalendar} />
          <span className="date__icon"><img src={calendarPic} alt="calendario"/></span>

      </div>
      <div className="mood__container">
        <h4 className="mood__title">Estado de ánimo</h4>
        <form className="mood__form">

          <label>
            (:
              <input className="mood__select" id="feeling1" type="radio" value="happy" onChange={this.handleHappy} />

          {/* checked={this.state.selectedOption==='happy'}   */}
          {/* checked={this.state.selectedOption==='sad'} */}
</label>
            <label>
              <input className="mood__select" id="feeling2" type="radio" value="sad"  onChange={this.handleSad} />
            ):
          </label>
        </form>
      </div>
      <div className="message__container">
        <h4 className="message__title">Mensaje</h4>
        <textarea className="message__text" placeholder="¿Por qué es un buen día?" onChange={this.props.onChangeMessage}></textarea>
    </div>
    <Link className="link" to='/'>
    <input className="button button-save" type="button" value="GUARDAR"
      onClick={this.props.onChangeSaveInfo}>
    </input>
  </Link>
   <Link className="link" to='/'>
   <input className="button button-cancel" type="button" value="CANCELAR"></input>
  </Link>
  <Switch>
    <Route path='/Calendar' render={() =>
      <Calendar />}
    />
    <Route path="/App" component={App} />
  </Switch>
  <h2 className="nav_calendar">Calendar of face</h2>
  <ul className="calendar_face">
    {
      all.map(
        life =><li>
         <p title={life.valueDate}>
         <img className={`face face--${life.happyFace}`} />
         </p>
         <span >{life.message} </span>
       </li>
       )
     }
 </ul>
      {/* <button className="btn btn-default" type="submit">Guardar</button> */}
      {/* <button className="btn btn-default" type="delete">Cancelar</button> */}
    </div>
  );
}
}

export default Editor;
