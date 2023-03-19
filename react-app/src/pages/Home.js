import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
export default class About extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navigation, null),
            React.createElement(SearchBar, null),
            React.createElement(Cards, null)));
    }
}
