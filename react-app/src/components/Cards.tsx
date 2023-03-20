import React, { Component } from 'react';
import allCars from '../data/cars';
import Card from './Card';

import { ICarSchema } from '../models';

export default class Cards extends Component {
  render(): JSX.Element {
    return (
      <div className="mt-12 mb-24">
        <div className="flex justify-center gap-16 flex-wrap">
          {allCars.map((car: ICarSchema) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      </div>
    );
  }
}
