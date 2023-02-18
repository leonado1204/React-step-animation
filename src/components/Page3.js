import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CCloseButton from 'react-bootstrap/CloseButton';
import Toggle from 'react-styled-toggle';

export class Page3 extends Component {
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
          <AppBar title="Energy detail" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  variant="danger"
                  now={75}
                  label={`${75}%`}
                />
              </div>
              <div className="col-1">
                <CCloseButton className="close" onClick={this.back} />
              </div>
            </div>
          </div>
          <p className="title">Energy detail</p>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <p className="battery">Add battery</p>
              </div>
              <div className="col-5">
                <Toggle className="toggle" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="input-battery">
              <input
                text="number"
                placeholder="Electricity usage/month (kWh)"
                className="battery1"
              ></input>
              <p className="hint">
                <i>The avg. monthly usage in your area is 546kWh</i>
              </p>
            </div>
            <div className="input-battery">
              <input
                text="number"
                placeholder="Electricity bill/month"
                className="battery1"
              ></input>
              <div className="Button">
                <button className="battery21" onClick={this.continue}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Page3;
