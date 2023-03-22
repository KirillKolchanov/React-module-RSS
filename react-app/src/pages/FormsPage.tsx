import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Forms from '../components/Forms';

export default class FormsPage extends Component {
  render(): JSX.Element {
    return (
      <>
        <Navigation />
        <Forms />
        {/* <FormsCards /> */}
      </>
    );
  }
}
