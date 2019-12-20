import React from 'react';
import {
  MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,
} from 'mdbreact';
import AdoptMe from '../AdoptMeForm/AdoptMeFormPopUp';
import SponsorMe from '../SponsorMe/SponsorMe';

const CardExample = (props) => {
  const { pets } = props;
  return (
    <MDBContainer>
      <MDBRow>
        {pets.length > 0 ? pets.map((postDetail) => (
          <MDBCol md="4">
            <MDBCard style={{ padding: '1%', width: '22rem' }}>
              <MDBCardImage className="img-fluid" src={postDetail.pic} waves />
              <MDBCardBody>
                <MDBCardTitle>{postDetail.title}</MDBCardTitle>
                <MDBCardText>
                  {postDetail.content}
                  <br />
                  {' '}
                  <strong>Size: </strong>
                  {postDetail.size}
                  <br />
                  {' '}
                  <strong>City: </strong>
                  {postDetail.city}
                  {' '}
                  <br />
                  {' '}
                  <strong>Type: </strong>
                  {postDetail.type}
                </MDBCardText>

                <AdoptMe />

                <p />
                <SponsorMe />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )) : <div style={{ textAlign: 'center', color: 'red' }}>No results found</div>}
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
