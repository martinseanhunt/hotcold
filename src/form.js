import React from 'react';

export default class Form extends React.Component{

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.guess.value);
  }

  render(){
    return (
      <form onSubmit={e => this.formSubmit(e)}> 
        <input type="number"
          ref={guess => this.guess = guess}
        />
        <input type="submit" value="guess"/>
      </form>
    );
  }
}