import React, { Component } from 'react';
export default class Card extends Component {
    render() {
        const { car } = this.props;
        return (React.createElement("div", { className: 'max-w-sm rounded overflow-hidden shadow-lg' },
            React.createElement("div", { className: "px-6 py-4 w-96" },
                React.createElement("div", { className: "font-bold text-xl mb-2" }, car.make),
                React.createElement("p", { className: "text-base" }, car.model),
                React.createElement("img", { className: 'mt-6', src: car.img, alt: "" }))));
    }
}
