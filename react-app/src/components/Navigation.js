import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
    render() {
        return (React.createElement("div", { className: 'my-0 pr-24 pl-24 w-full h-24 flex items-center justify-between border-b-2' },
            React.createElement("h2", null, "Current page"),
            React.createElement("div", { className: 'flex gap-10' },
                React.createElement(Link, { className: 'text-2xl', to: '/' }, "Home"),
                React.createElement(Link, { className: 'text-2xl', to: '/about' }, "About us"))));
    }
}
