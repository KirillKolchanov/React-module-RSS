import { ICarSchema } from 'models';
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
          <div className="font-bold text-xl mb-2">{car.make}</div>
          <p className="text-base">{car.model}</p>
          <img src={car.img} alt="" />
        </div>
      </div>
    );
  }
}