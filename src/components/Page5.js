import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CCloseButton from 'react-bootstrap/CloseButton';

export class Page5 extends Component {
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
          <AppBar title="User info" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  variant="danger"
                  now={95}
                  label={`${95}%`}
                />
              </div>
              <div className="col-1">
                <CCloseButton className="close" onClick={this.back} />
              </div>
            </div>
          </div>
          <p className="title">User info</p>
          <div className="input-battery">
            <input
              text="number"
              placeholder="FullName"
              className="battery1"
            ></input>
            <input
              text="number"
              placeholder="Email"
              className="battery11"
            ></input>
            <div className="row">
              <div className="col-3">
                <input
                  text="number"
                  placeholder="+236"
                  className="battery11"
                ></input>
              </div>
              <div className="col-9">
                <input
                  text="number"
                  placeholder="Telephone"
                  className="battery12"
                ></input>
              </div>
            </div>
            <div className="Button">
              <button className="battery2" onClick={this.continue}>
                Next
              </button>
              <p className="hint1">
                <i>Click next to validate your telephone</i>
              </p>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Page5;
