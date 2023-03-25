import React, { Component, createRef } from 'react';
import allCars from '../data/cars';

import '../styles/pages/Forms.css';

import { ICarSchema } from '../models';
import Switcher from './Forms/Switcher';

type MyProps = Record<string, never>;

type MyState = {
  carMake: string | undefined;
  carModel: string | undefined;
  carYear: string | undefined;
  carFuel: string | undefined;
  carPhoto: string | undefined;
};

export default class Forms extends React.Component<MyProps, MyState> {
  carMakeRef: React.RefObject<HTMLSelectElement>;
  carModelRef: React.RefObject<HTMLInputElement>;
  carYearRef: React.RefObject<HTMLInputElement>;
  carPetrolRef: React.RefObject<HTMLInputElement>;
  carDieselRef: React.RefObject<HTMLInputElement>;
  carElectroRef: React.RefObject<HTMLInputElement>;
  carPhotoRef: React.RefObject<HTMLInputElement>;

  constructor(props: MyProps) {
    super(props);

    this.carMakeRef = createRef();
    this.carModelRef = createRef();
    this.carYearRef = createRef();
    this.carPetrolRef = createRef();
    this.carDieselRef = createRef();
    this.carElectroRef = createRef();
    this.carPhotoRef = createRef();

    this.state = {
      carMake: '',
      carModel: '',
      carYear: '',
      carFuel: '',
      carPhoto: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onPetrolChange = this.onPetrolChange.bind(this);
    this.onDieselChange = this.onDieselChange.bind(this);
    this.onElectroChange = this.onElectroChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
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

  onYearChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carYear = this.carYearRef.current?.value?.substring(0, 4);
    this.setState({ carYear });
  }

  onPetrolChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carFuel = this.carPetrolRef.current?.id;
    this.setState({ carFuel });
  }

  onDieselChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carFuel = this.carDieselRef.current?.id;
    this.setState({ carFuel });
  }

  onElectroChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carFuel = this.carElectroRef.current?.id;
    this.setState({ carFuel });
  }

  onPhotoChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carPhoto: HTMLInputElement | null = this.carPhotoRef.current;
    if (event.target.name === 'file' && carPhoto?.files && carPhoto.files.length) {
      this.setState({ carPhoto: URL.createObjectURL(carPhoto.files[0]) });
    }
  }

  render(): JSX.Element {
    return (
      <div className="form_wrapper flex pb-72 bg-cover bg-center bg-no-repeat justify-end">
        <div className="p-10 mt-20 mr-56 form-floating xl:w-1/4 rounded dark:bg-slate-800 bg-white  bg-opacity-75">
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            <h2 className="text-center mb-10 font-bold">Car constructor</h2>
            <select
              defaultValue={''}
              className="mt-10 rounded py-2 px-3 border-2 required"
              placeholder="Select year:"
              onChange={this.onMakeChange}
              ref={this.carMakeRef}
              required
            >
              <option value="" disabled>
                Select make:
              </option>
              {['Aston Martin', 'Audi', 'Bmw', 'Ferrari', 'Mercedes', 'Porsche', 'Volkswagen'].map(
                (make: string): JSX.Element => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                )
              )}
            </select>
            {/* <input
              className="border-2 rounded py-2 px-3"
              type="text"
              // className={className}
              placeholder="Car make"
              name="carMake"
              ref={this.carMakeRef}
              onChange={this.onMakeChange}
              data-testid="textInput"
              // id={this.props.subject}
              required
            /> */}
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
              required
            />
            <div className="flex mt-10 items-center">
              <input
                type="radio"
                id="petrol"
                name="carFuel"
                ref={this.carPetrolRef}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                defaultChecked={false}
                onChange={this.onPetrolChange}
              />
              <label htmlFor="petrol" className="ml-2">
                <span className="block text-m font-medium text-gray-700">Petrol</span>
              </label>
              <input
                type="radio"
                id="diesel"
                name="carFuel"
                ref={this.carDieselRef}
                className="ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                defaultChecked={false}
                onChange={this.onDieselChange}
              />
              <label htmlFor="diesel" className="ml-2">
                <span className="block text-m font-medium text-gray-700">Diesel</span>
              </label>
              <input
                type="radio"
                id="electro"
                name="carFuel"
                ref={this.carElectroRef}
                className="ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                defaultChecked={false}
                onChange={this.onElectroChange}
              />
              <label htmlFor="electro" className="ml-2">
                <span className="block text-m font-medium text-gray-700">Electro</span>
              </label>
            </div>
            <div className="flex flex-col mt-10">
              <label htmlFor="DataPicker" className="mb-2 font-medium text-gray-700">
                Select the year of production:
              </label>
              <input
                type="date"
                id="DataPicker"
                name="DataPicker"
                min="1990-01-01"
                max="2023-01-01"
                ref={this.carYearRef}
                onChange={this.onYearChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col mt-10">
              <label htmlFor="DataPicker" className="mb-2 font-medium text-gray-700">
                Choose a car photo:
                <input
                  type="file"
                  id="PhotoPicker"
                  name="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="block mt-2 w-full text-sm cursor-pointer text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                  ref={this.carPhotoRef}
                  onChange={this.onPhotoChange}
                />
              </label>
            </div>
            {}
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
