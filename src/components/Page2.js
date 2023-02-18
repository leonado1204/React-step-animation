import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CCloseButton from 'react-bootstrap/CloseButton';

export class Page2 extends Component {
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
          PaperProps={{
            style: {
              borderRadius: 70,
              backgroundColor: 'rgba(47, 69, 95, 0.95)',
            },
          }}
        >
          <AppBar title="Decision maker" />
          <div className="container">
            <div className="row">
              <div className="col-11">
                <ProgressBar
                  className="progressbar"
                  variant="danger"
                  now={40}
                  label={`${40}%`}
                />
              </div>
              <div className="col-1">
                <CCloseButton className="close" onClick={this.back} />
              </div>
            </div>
          </div>
          <p className="title">Are you own this property?</p>
          <div className="container">
            <div className="row">
              <div className="col-6 contain" onClick={this.continue}>
                <p className="decision img-thumbnail">Owner & Decision maker</p>
                <p className="title1">Yes</p>
              </div>
              <div className="col-6 contain" onClick={this.continue}>
                <p className="decision1 img-thumbnail">Tenant</p>
                <p className="title1">No</p>
              </div>
            </div>
          </div>
          <p className="hint2">
            <i>
              Also select ‘Yes’ if you can make financial decisions on behalf of
              this property
            </i>
          </p>
        </Dialog>
      </>
    );
  }
}

export default Page2;
