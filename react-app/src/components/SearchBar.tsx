import About from 'pages/About';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {

  render(): JSX.Element {
    return (
      <div className="relative mt-20 flex justify-center">
        <input
          className="w-54 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Search"
        />
        <button
          className="top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    );
  }
}