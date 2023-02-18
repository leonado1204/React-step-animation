import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import School from '../image/school.jpg';
import Home from '../image/home.jpg';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CCloseButton from 'react-bootstrap/CloseButton';
export class Page1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <>
        <Dialog
          open
          className="dialog"
          fullWidth
          maxWidth="sm"
          PaperProps={{
            style: {
              borderRadius: 70,
              backgroundColor: 'rgba(47, 69, 95, 0.95)',
            },
          }}
        >
          <AppBar title="Property type" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  now={15}
                  label={`${15}%`}
                />
              </div>
              <div className="col-1">
                <CCloseButton className="close" />
              </div>
            </div>
          </div>
          <p className="title">Property Selection</p>
          <div className="container top">
            <div className="row">
              <div className="col-6 contain">
                <img
                  src={Home}
                  alt="home"
                  onClick={this.continue}
                  className="image"
                />
                <p className="title1">House</p>
              </div>
              <div className="col-6 contain">
                <img
                  src={School}
                  alt="school"
                  onClick={this.continue}
                  className="image"
                />
                <p className="title1">School</p>
              </div>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Page1;
