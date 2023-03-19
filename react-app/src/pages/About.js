import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import '../styles/pages/About.css';
export default class About extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navigation, null),
            React.createElement("div", { className: 'flex my-40 items-center justify-center' },
                React.createElement("h1", { className: 'm-20' },
                    "The project made by ",
                    React.createElement("span", { className: 'font-bold' }, "Kirill Kolchanov")),
                React.createElement("div", { className: 'imgAbout bg-cover items-center rounded-full' }))));
    }
}
