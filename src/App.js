import React from 'react';

import Form from './form'
import Guesses from './guesses'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Try to guess the number between 0 & 100',
      computerGuess: Math.floor(Math.random() * 100),
      guesses: [],
    }
  }

  handleGuess(guess) {
    const difference = Math.abs(guess - this.state.computerGuess);
    let message = '';
    if (difference === 0) {
      message = 'You got it!!!!!'
    } else if (difference < 5 ) {
      message = 'Super Hot!';
    }else if (difference < 10 ) {
      message = 'Hot';
    } else if (difference < 20 ) {
      message = 'Warm';
    } else if (difference < 30 ) {
      message = 'Lukewarm';
    } else { 
      message = 'Cold';
    }

    this.setState({
      guesses: [...this.state.guesses, guess],
      message: message
    });
  }

  render(){
    const lastGuess = this.state.guesses[this.state.guesses.length - 1];
    return (
      <div className="game">
        <h1>{this.state.message}</h1>
        <Form value={lastGuess} 
          onSubmit={val => this.handleGuess(val)}
         /> 
        <Guesses guesses={this.state.guesses}/>
      </div>
    );
  }
}