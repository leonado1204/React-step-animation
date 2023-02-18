import React, { Component } from 'react';
import { DigitInputs, Digit } from 'digitinputs-react';
import 'digitinputs-react/dist/index.css';

class Example extends Component {
  handleDigitsChange(value) {}
  render() {
    return (
      <form className="form">
        <DigitInputs hidden onDigitsChange={this.handleDigitsChange}>
          <Digit className="digit" />
          <Digit className="digit" />
          <Digit className="digit" />
          <Digit className="digit" />
        </DigitInputs>
      </form>
    );
  }
}

export default Example;
