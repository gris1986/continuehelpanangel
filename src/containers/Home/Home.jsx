import React, { Component } from 'react';
import petsData from '../../api/data.json';
import Carousel from '../../components/CarouselPage/CarouselPage';
import Search from '../../components/Search/Search';
import CardBox from '../../components/CardBox/CardBox';

export default class Home extends Component {
  state = {
    pets: [...petsData],
    type: 'cat',
    city: 'Tegucigalpa',
    size: 'small',
  };

    searchClickHandler = () => {
      const { pets } = this.state;

      const filteredPets = pets.filter((pet, index) => {
        const { type, city, size } = pet;
        const { type: stateType, city: stateCity, size: stateSize } = this.state;

        return (type === stateType && city === stateCity && size === stateSize);
      });
      this.setState({ pets: [...filteredPets] });
    }

    typeChangeHandler = (event) => this.setState({ type: event.target.value })

    cityClickHandler = (event) => this.setState({ city: event.target.value })

    sizeChangeHandler = (event) => this.setState({ size: event.target.value })

    render() {
      const { pets } = this.state;
      return (
        <>
          <Carousel />
          <Search
            searchClick={this.searchClickHandler}
            typeChange={this.typeChangeHandler}
            cityChange={this.cityClickHandler}
            sizeChange={this.sizeChangeHandler}
          />
          <CardBox pets={pets} />
        </>
      );
    }
}
