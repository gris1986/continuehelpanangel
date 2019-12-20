import React from 'react';
import {
  MDBCol, MDBFormInline, MDBBtn,
} from 'mdbreact';

import './Search.css';

const sizeoptions = [
  {
    text: 'small',
    value: 'small',
  },
  {
    text: 'medium',
    value: 'small',
  },
  {
    text: 'big',
    value: 'small',
  },
];

const cityoptions = [
  {
    text: 'Tegucigalpa',
    value: 'Tegucigalpa',
  },
  {
    text: 'San Pedro Sula',
    value: 'San Pedro Sula',
  },
  {
    text: 'Siguatepeque',
    value: 'Siguatepeque',
  },
  {
    text: 'Choluteca',
    value: 'Choluteca',
  },
];

const typeoptions = [
  {
    text: 'cat',
    value: 'cat',
  },
  {
    text: 'rabbit',
    value: 'rabbit',
  },
  {
    text: 'dog',
    value: 'dog',
  },
];

const SearchPage = (props) => {
  const {
    searchClick, typeChange, cityChange, sizeChange,
  } = props;

  return (
    <div className="search">
      <MDBCol md="12" position="center">
        <MDBFormInline className="md-form mr-auto mb-4">
          <span style={{ color: 'white' }}><strong>Size:</strong></span>
          <select onChange={(event) => sizeChange(event)} label="Size" className="search_select " name="size">
            {sizeoptions.map((option) => <option value={option.vlue}>{option.text}</option>)}
          </select>
          <span style={{ color: 'white' }}><strong>City:</strong></span>
          <select onChange={(event) => cityChange(event)} label="City" className="search_select " name="city">
            {cityoptions.map((option) => <option value={option.value}>{option.text}</option>)}
          </select>
          <span style={{ color: 'white' }}><strong>Type:</strong></span>
          <select onChange={(event) => typeChange(event)} label="Type" className="search_select " name="type">
            {typeoptions.map((option) => <option value={option.value}>{option.text}</option>)}
          </select>
          <MDBBtn onClick={(event) => searchClick(event)} rounded color="info">Search</MDBBtn>
        </MDBFormInline>
      </MDBCol>

    </div>
  );
};

export default SearchPage;
