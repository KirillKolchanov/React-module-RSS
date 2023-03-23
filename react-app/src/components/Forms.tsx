import React, { Component, createRef } from 'react';
import allCars from '../data/cars';

import '../styles/pages/Forms.css';

import { ICarSchema } from '../models';

export default class Forms extends Component {
  carMakeRef = createRef<HTMLInputElement>();
  carModelRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      carMake: '',
      carModel: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  onMakeChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carMake = this.carMakeRef.current?.value;
    this.setState({ carMake });
  }

  onModelChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carModel = this.carModelRef.current?.value;
    this.setState({ carModel });
  }

  render(): JSX.Element {
    return (
      <div className="form_wrapper mt-40 ml-10 flex">
        {/* <img src="../../public/cars/forms_background.png" alt="" /> */}
        <div className="form-floating mt-3 xl:w-96">
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            <h2 className="text-center mb-10 font-bold">Car constructor</h2>
            <input
              className="border-2 rounded py-2 px-3 required"
              type="text"
              // className={className}
              placeholder="Car make"
              name="carMake"
              ref={this.carMakeRef}
              onChange={this.onMakeChange}
              data-testid="textInput"
              // id={this.props.subject}
              required
            />
            <input
              className="mt-10 border-2 rounded py-2 px-3 required"
              type="text"
              // className={className}
              placeholder="Car model"
              name="carModel"
              ref={this.carModelRef}
              onChange={this.onModelChange}
              data-testid="textInput"
              // id={this.props.subject}
            />
            <select
              className="mt-10 rounded py-2 px-3 border-2 required"
              placeholder="Select year:"
            >
              {/* // valid={this.state.gender}
              // subject="Select gender"
              // name="gender"
              // options={['Male', 'Female']}
              // onChange={this.onChangeHandler.bind(this)}
              // reference={this.genderSelect}
              // warningMessage={warningMessages.gender.emptyInput} */}
              <option value="" disabled selected>
                Select year:
              </option>
              {[
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
              ].map(
                (year: string): JSX.Element => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </select>
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
