import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import {
  MDBContainer, MDBBtn, MDBTypography, MDBBox,
} from 'mdbreact';

export default class SponsorMe extends Component {
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
        <MDBBtn size="sm" color="info" value="Open" onClick={() => this.openModal()}>+ Sponsor Me! </MDBBtn>

        <Modal visible={this.state.visible} width="800" height="590" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <MDBContainer>
            <h1 style={{ color: '#3DB0D8' }}>Please Donate!</h1>
            <div style={{borderRadius: '14px', backgroundColor: '#C4E3EE'  }}>
              <p>If you want to donate you can do it to our accounts or by calling 8000-0000</p>

              <p>Help an Angel Accounts:</p>
              <ol>
                <li>Account at Banco Ficohsa 8-494-576 in the name of Jessica Ivana Escober Centeno</li>
                <li>Tigo Money 95878171 Jessica Ivana Escober Centeno.</li>
                <li>Account in BAC 729369991 in the name of Jessica Ivana Escober Centeno.</li>
                <li>Account in dollars in BAC 740874441 in the name of Jessica Ivana Escober Centeno</li>
                <li>Cooperativa Sagrada Familia, removable savings account 1135355</li>
                <li>Paypal: mail mimestizoyyohn@gmail.com or the link https://www.paypal.me/mimestizoyyohn</li>
              </ol>
            </div>


            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
          </MDBContainer>


        </Modal>
      </section>
    );
  }
}
