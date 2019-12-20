import React from 'react';
import {
  MDBCol, MDBFormInline, MDBBtn, MDBModal,
} from 'mdbreact';

import './Search.css';


const SearchPage = () => {

  const sizeoptions = [
    {
      text: 'small',
      value: '1',
    },
    {
      text: 'medium',
      value: '2',
    },
    {
      text: 'big',
      value: '3',
    },
  ];

  const cityoptions = [
    {
      text: 'Tegucigalpa',
      value: '1',
    },
    {
      text: 'San Pedro Sula',
      value: '2',
    },
    {
      text: 'Siguatepeque',
      value: '3',
    },
    {
      text: 'Choluteca',
      value: '4',
    },
  ];

  const typeoptions = [
    {
      text: 'cat',
      value: '1',
    },
    {
      text: 'rabbit',
      value: '2',
    },
    {
      text: 'dog',
      value: '3',
    },
  ];

  return (
    <div className="search">

      <MDBCol md="12" position="center">
        <MDBFormInline className="md-form mr-auto mb-4">

          <span style={{ color: 'white' }}><strong>Size:</strong></span>
          <select label="Size" className="search_select "name="size">
            {sizeoptions.map((option) => <option value={option.vlue}>{option.text}</option>)}
          </select>
          <span style={{ color: 'white' }}><strong>City:</strong></span>
          <select label="City" className="search_select "name="city">
            {cityoptions.map((option) => <option value={option.value}>{option.text}</option>)}
          </select>
          <span style={{ color: 'white' }}><strong>Type:</strong></span>
          <select label="Type" className="search_select "name="type">
            {typeoptions.map((option) => <option value={option.value}>{option.text}</option>)}
          </select>
          <MDBBtn rounded color="info">Search</MDBBtn>
        </MDBFormInline>
      </MDBCol>

    </div>
  );
};

export default SearchPage;
