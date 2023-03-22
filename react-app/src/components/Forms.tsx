import React, { Component, createRef } from 'react';
import allCars from '../data/cars';

import '../styles/pages/Forms.css';

import { ICarSchema } from '../models';

export default class Forms extends Component {
  carMakeRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      carMake: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carMake = this.carMakeRef.current?.value;
    this.setState({ carMake });
  }

  render(): JSX.Element {
    return (
      <div className="form_wrapper mt-40 ml-10 flex">
        {/* <img src="../../public/cars/forms_background.png" alt="" /> */}
        <div className="form-floating mt-3 xl:w-96">
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            <h2 className="text-center mb-5 font-bold">Car constructor</h2>
            <input
              className="border-2 rounded py-2 px-3 required"
              type="text"
              // className={className}
              placeholder="Car make"
              name="Car make"
              ref={this.carMakeRef}
              onChange={this.onChange}
              // ref={this.props.reference}
              data-testid="textInput"
              // id={this.props.subject}
            />
            <button
              type="submit"
              className="mt-20 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
