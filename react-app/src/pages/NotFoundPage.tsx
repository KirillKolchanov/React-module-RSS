import React, { Component } from 'react';
import Navigation from '../components/Navigation';

export default class NotFoundPage extends Component {
  render(): JSX.Element {
    return (
      <>
        <Navigation />
        <h1 className="mt-12 ml-12">Error 404. Page not found!</h1>
      </>
    );
  }
}
