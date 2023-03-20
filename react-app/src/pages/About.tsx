import React, { Component } from 'react';
import Navigation from '../components/Navigation';

import '../styles/pages/About.css'

export default class About extends Component {

  render(): JSX.Element {
    return (
      <>
      <Navigation />
      <div className='flex my-40 items-center justify-center'>
        <h1 className='m-20'>The project made by <span className='font-bold'>Kirill Kolchanov</span></h1>
        <div className='imgAbout bg-cover items-center rounded-full' />
      </div>
      </>
    );
  }
}