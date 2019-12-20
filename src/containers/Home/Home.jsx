import React, { Component } from 'react';
import petsData from '../../api/data.json';
import Carousel from '../../components/CarouselPage/CarouselPage';
import Search from '../../components/Search/Search';
import CardBox from '../../components/CardBox/CardBox';

export default class Home extends Component {
  state = {
    pets: [...petsData],
    type: '',
    city: '',
    size: '',
  };

    searchClickHandler = () => {}

    render() {
      const { pets } = this.state;
      return (
        <>
          <Carousel />
          <Search click={this.searchClickHandler} />
          <CardBox pets={pets} />
        </>
      );
    }
}
