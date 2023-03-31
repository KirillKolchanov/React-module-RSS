import React from 'react';
import allCars from '../data/cars';
import Card from './Card';

import { ICarSchema } from '../models';

const Cards = (): JSX.Element => {
  return (
    <div className="mt-12 mb-24">
      <div className="flex justify-center gap-16 flex-wrap">
        {allCars.map((car: ICarSchema, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
