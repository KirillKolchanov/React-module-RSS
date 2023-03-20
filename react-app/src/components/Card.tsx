import { ICarSchema } from '../models';
import React, { Component } from 'react';

interface Props {
  car: ICarSchema
}

export default class Card extends Component<Props> {

  render(): JSX.Element {
    const { car } = this.props;
    return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div className="px-6 py-4 w-96">
          <div className="card-title_wrapper flex justify-between items-center">
            <div className="card-title">
              <div className="font-bold text-xl mb-2">{car.make}</div>
              <p className="text-base mb-2">{car.model}</p>
              <p className="text-base mb-2">Age: {car.age}</p>
            </div>
            <div className="card-price shadow-lg">
              <p className="text-base mt-4 text-xl">＄{car.price}</p>
            </div>
          </div>
          <div className="card-img_wrapper flex items-center h-72">
            <img className='mt-6' src={car.img} alt="" />
          </div>
          <p className="text-base mt-4">Fuel: {car.fuel}</p>
          <p className="text-base mt-2">Miles: {car.miles}</p>
          <button
            className={`mt-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-700
            text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex m-auto`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}