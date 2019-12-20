import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {
  MDBBtn,
} from 'mdbreact';
import AdoptMeForm from './AdoptMeForm';

export default class AdoptMePopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <MDBBtn size="sm" color="info" value="Open" onClick={() => this.openModal()}>+ Adopt Me! </MDBBtn>

        <Modal visible={this.state.visible} width="800" height="590" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div>
            <AdoptMeForm />

            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
    );
  }
}
