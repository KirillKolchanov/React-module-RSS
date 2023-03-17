import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

export default class About extends Component {
  render(): JSX.Element {
    return (
      <>
      <Navigation />
      <SearchBar />
      </>
    );
  }
}