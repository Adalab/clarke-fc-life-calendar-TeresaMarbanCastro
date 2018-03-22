import React, { Component } from 'react';
// import calendarPic from '././images/calendar.png';

class Editor extends Component {
  constructor(props){
    super(props);

    this.handleFeelingsChange = this.handleFeelingsChange.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      selectedOption: 'happy'
    }


  }


  handleFeelingsChange(event) {
    this.setState({
      selectedOption: event.target.value
    })
  }

  // handleFormSubmit (formSubmitEvent) {
  //   formSubmitEvent.preventDefault();
  //
  //   console.log('You have selected:', this.state.selectedOption);
  // }


  render() {
    return (
      <div className="editor__container">
        <div className="date__container">
          <h4 className="date__title">Fecha</h4>
          <input className="date__input" type="date" placeholder="22/03/2018">
          {/* <span className="date__icon"><img src={calendarPic} alt="calendario"/></span> */}
        </input>
      </div>
      <div className="mood__container">
        <h4 className="mood__title">Estado de ánimo</h4>
        <form className="mood__form" onSubmit={this.handleFormSubmit}>

          <label>
            (:
              <input className="mood__select" id="feeling1" type="radio" value="happy" checked={this.state.selectedOption==='happy'} onChange={this.handleFeelingsChange} />
            </label>

            <label>
              <input className="mood__select" id="feeling2" type="radio" value="sad" checked={this.state.selectedOption==='sad'} onChange={this.handleFeelingsChange} />
            ):
          </label>
        </form>
      </div>
      <div className="message__container">
        <h4 className="message__title">Mensaje</h4>
        <textarea className="message__text" placeholder="¿Por qué es un buen día?"></textarea>
    </div>
      <button className="btn btn-default" type="submit">Guardar</button>
      <button className="btn btn-default" type="delete">Cancelar</button>
    </div>
  );
}
}

export default Editor;
