import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    const all = this.props.calendar;
    return (
      <div className="calendar__container">
        <ul className="calendar__face">
          {all.map(life =>
          <li>
            <p title={life.valueDate}>
              <img className={`face face--${life.happyFace}`} />
            </p>
            <span>{life.message}</span>
          </li>
        )}
        </ul>

      </div>
    );
  }
}

export default Calendar;
