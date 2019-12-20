/* eslint-disable no-unused-vars */
import React from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,
} from 'mdbreact';

class AdoptMeForm extends React.Component {
state = {
  formActivePanel1: 1,
  formActivePanel1Changed: false,
}


swapFormActive = (a) => (param) => (e) => {
  this.setState({
    [`formActivePanel${a}`]: param,
    [`formActivePanel${a}Changed`]: true,
  });
}

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    [`formActivePanel${a}`]: param,
    [`formActivePanel${a}Changed`]: true,
  });
}

handleSubmission = (a) => (param) => (e) => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state[`formActivePanel${a}Changed`]) {
    return true;
  }
}

render() {
  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Adoption form</strong></h2>


      <form role="form" action="" method="post">
        <MDBRow>
          {this.state.formActivePanel1 == 1
          && (
          <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Basic Information</strong>
            </h3>
            <MDBInput label="Email" className="mt-4" autoFocus={this.calculateAutofocus(1)} />
            <MDBInput label="Full Name" className="mt-4" />
            <MDBInput label="ID Number" className="mt-4" />
            <MDBInput label="Phone Number" className="mt-4" />
            <MDBBtn color="info" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>next</MDBBtn>
          </MDBCol>
          )}

          {this.state.formActivePanel1 == 2
          && (
          <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Other Information</strong></h3>
            <label>
Do you have children at home?
              <br />
              <input type="radio" value="yes" />
            Yes
              <br />
              <input type="radio" value="no" />
            No
              <br />
            </label>
            <p />
            <label>
Do you have other pets at home?
              <br />
              <input type="radio" value="yes" />
            Yes
              <br />
              <input type="radio" value="no" />
            No
            </label>
            <MDBInput label="Address" type="textarea" rows="2" />


            <MDBBtn color="info" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
            <MDBBtn color="info" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</MDBBtn>
          </MDBCol>
          )}

          {this.state.formActivePanel1 == 3
          && (
          <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
            <p />
            <label>
            Would you be willing to allow a visit to your home for prior evaluation?
              <br />
              <input type="radio" value="yes" />
            Yes
              <br />
              <input type="radio" value="no" />
            No
            </label>
            <p />
            <label>
              <input type="checkbox" value="checked" />

            I guarantee all information provided is true and It can be used legally
            </label>
            <p />
            <label>
              <input type="checkbox" value="checked" autoFocus={this.calculateAutofocus(1)} />
            I agreee to the terms and conditions


            </label>
            <p />
            <MDBBtn color="info" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
            <MDBBtn color="info" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</MDBBtn>
          </MDBCol>
          )}

          {this.state.formActivePanel1 == 4
          && (
          <MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
            <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
            <MDBBtn color="info" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</MDBBtn>
            <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission(0)(1)}>Submit</MDBBtn>
          </MDBCol>
          )}
        </MDBRow>
      </form>
    </MDBContainer>
  );
}
}

export default AdoptMeForm;
