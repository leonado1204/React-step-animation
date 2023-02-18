import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CloseButton from 'react-bootstrap/CloseButton';

export class Page4 extends Component {
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
            style: { borderRadius: 70 },
          }}
        >
          <AppBar title="Enter Address" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  variant="danger"
                  now={85}
                  label={`${85}%`}
                />
              </div>
              <div className="col-1">
                <CloseButton className="close" onClick={this.back} />
              </div>
            </div>
          </div>
          <p className="title">Enter Address</p>
          <div className="input-battery">
            <p className="hint">Enter a valid address</p>
            <input text="number" className="battery1"></input>
            <div className="Button">
              <button className="battery2" onClick={this.continue}>
                Next
              </button>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Page4;
