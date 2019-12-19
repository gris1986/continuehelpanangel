import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
    const { pets } = props;
  return (
    <MDBContainer>
    <MDBRow>
    {pets.map((postDetail, index) =>{
          return (
            <MDBCol md="4">
            <MDBCard style={{ padding: '1%', width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={postDetail.pic} waves />
              <MDBCardBody>
                <MDBCardTitle>{postDetail.title}</MDBCardTitle>
                <MDBCardText>
                {postDetail.content}
                </MDBCardText>
                <MDBBtn size="sm" color="info" href="#">+ Adopt Me! </MDBBtn>
                <p />
                <MDBBtn size="sm" color="info" href="#">+ Sponsor Me</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          );
        })}
   
    </MDBRow>
    </MDBContainer>
  )
}

export default CardExample;