import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

export default class About extends Component {
  render(): JSX.Element {
    return (
      <>
        <Navigation />
        <SearchBar />
        <Cards />
      </>
    );
  }
}
