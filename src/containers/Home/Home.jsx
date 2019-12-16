import React, { Component } from 'react';

class Home extends Component {
  state = {
    searchText: '',
  };

  clickListener = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText });
  }

  render() {
    const { searchText } = this.state;
    return (
      <>
        <h1>Home</h1>
        Search:
        <input onChange={this.clickListener} type="text" value={searchText} />
        <p>
          Current search text:
          {searchText}
        </p>
      </>
    );
  }
}

export default Home;