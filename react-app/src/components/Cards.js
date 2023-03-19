import React, { Component } from 'react';
import allCars from '../data/cars';
import Card from './Card';
export default class Cards extends Component {
    render() {
        return (React.createElement("div", { className: "mt-16" },
            React.createElement("div", { className: 'flex justify-center gap-16 flex-wrap' }, allCars.map((car) => React.createElement(Card, { key: car.id, car: car })))));
    }
}
