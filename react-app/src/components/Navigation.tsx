import About from '../pages/About';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render(): JSX.Element {
    return (
      <div className='my-0 pr-24 pl-24 w-full h-24 flex items-center justify-between border-b-2'>
        <h2>
          {window.location.pathname === '/' ? 'Home page' :
          window.location.pathname === '/about' ? 'About page' :
          'Error page'}
        </h2>
        <div className='flex gap-10'>
          <Link className='text-2xl' to={'/'}>Home</Link>
          <Link className='text-2xl' to={'/about'}>About us</Link>
        </div>
      </div>
    );
  }
}