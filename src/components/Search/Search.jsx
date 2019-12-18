import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import './Search.css';

const SearchPage = () => {
  return (
    <div  className="search">
    <MDBCol md="12" position="center">
    <MDBFormInline className="md-form mr-auto mb-4">
      <input className="form-control mr-sm-2" type="text" placeholder="Size" aria-label="Search" />

      <input className="form-control mr-sm-2" type="text" placeholder="City" aria-label="Search" />

      <input className="form-control mr-sm-2" type="text" placeholder="Type" aria-label="Search" />
      <MDBBtn rounded color="info">Search</MDBBtn>

    </MDBFormInline>
  </MDBCol>
  </div>
  );
}

export default SearchPage;