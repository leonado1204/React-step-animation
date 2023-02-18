import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CCloseButton from 'react-bootstrap/CloseButton';
import Digit from './Digit';
export class Page6 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth="sm"
          PaperProps={{
            style: {
              borderRadius: 70,
              backgroundColor: 'rgba(47, 69, 95, 0.95)',
            },
          }}
        >
          <AppBar title="Validate telephone" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  variant="danger"
                  now={100}
                  label={`${100}%`}
                />
              </div>
              <div className="col-1">
                <CCloseButton className="close" onClick={this.back} />
              </div>
            </div>
          </div>
          <p className="title">Validate telephone</p>
          <p className="hint2">Enter 4-digit code</p>
          <Digit></Digit>
          <p className="hint2">
            <i>
              <u>Didn’t get it? Resend code</u>
            </i>
          </p>
          <div className="Button">
            <button className="battery3">Get solar savings</button>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Page6;
