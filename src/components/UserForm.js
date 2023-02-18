import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// import Page4 from './page4';
import Page5 from './Page5';
import Page6 from './Page6';
export class UserForm extends Component {
  state = {
    step: 1,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <Page1 nextStep={this.nextStep} />;
      case 2:
        return <Page2 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 3:
        return <Page3 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 4:
        return <Page5 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 5:
        return <Page6 nextStep={this.nextStep} prevStep={this.prevStep} />;
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default UserForm;
