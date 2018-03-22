import React, { Component } from 'react';
// import calendarPic from '././images/calendar.png';

class Editor extends Component {
  render() {
    return (
      <div className="editor__container">
        <div className="date__container">
          <h4 className="date__title">Fecha</h4>
          <input className="date__input" placeholder="22/03/2018">
     {/* <span className="date__icon"><img src={calendarPic} alt="calendario"/></span> */}
          </input>
        </div>
        <div className="mood__container">
          <h4 className="mood__title">Estado de ánimo</h4>
          <input className="mood__select" type="checkbox"></input>
          <input className="mood__select" type="checkbox"></input>

        </div>
      </div>
    );
  }
}

export default Editor;
