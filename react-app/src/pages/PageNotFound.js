import React, { Component } from 'react';
import Navigation from '../components/Navigation';
export default class About extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navigation, null),
            React.createElement("h1", { className: 'mt-12 ml-12' }, "Error 404. Page not found!")));
    }
}
