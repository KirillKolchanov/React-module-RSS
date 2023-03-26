import React, { Component, createRef, RefObject } from 'react';

import '../styles/pages/Forms.css';

import { ICarSchema } from '../models';
import Switcher from './Forms/Switcher';
import Card from './Card';
import TextInput from './Forms/TextInput';
import NumberInput from './Forms/NumberInput';
import Select from './Forms/Select';

type MyProps = Record<string, never>;

type MyState = {
  carMake: string | undefined;
  carModel: string | undefined;
  carYear: number | undefined;
  carFuel: string | undefined;
  carPhoto: string | undefined;
  carMileage: string | undefined;
  carPrice: number | undefined;
  allFormCars: ICarSchema[];
};

export default class Forms extends Component<MyProps, MyState> {
  carMakeRef: RefObject<HTMLSelectElement>;
  carModelRef: RefObject<HTMLInputElement>;
  carYearRef: RefObject<HTMLInputElement>;
  carPetrolRef: RefObject<HTMLInputElement>;
  carDieselRef: RefObject<HTMLInputElement>;
  carElectroRef: RefObject<HTMLInputElement>;
  carPhotoRef: RefObject<HTMLInputElement>;
  carMileageRef: RefObject<HTMLInputElement>;
  carPriceRef: RefObject<HTMLInputElement>;
  checkboxRef: RefObject<HTMLInputElement>;

  constructor(props: MyProps) {
    super(props);

    this.carMakeRef = createRef();
    this.carModelRef = createRef();
    this.carYearRef = createRef();
    this.carPetrolRef = createRef();
    this.carDieselRef = createRef();
    this.carElectroRef = createRef();
    this.carPhotoRef = createRef();
    this.carMileageRef = createRef();
    this.carPriceRef = createRef();
    this.checkboxRef = createRef();

    this.state = {
      carMake: '',
      carModel: '',
      carYear: 0,
      carFuel: '',
      carPhoto: '',
      carMileage: '',
      carPrice: 0,
      allFormCars: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onPetrolChange = this.onPetrolChange.bind(this);
    this.onDieselChange = this.onDieselChange.bind(this);
    this.onElectroChange = this.onElectroChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
    this.onMileageChange = this.onMileageChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm() {
    if (
      this.carMakeRef.current &&
      this.carModelRef.current &&
      this.carPetrolRef.current &&
      this.carDieselRef.current &&
      this.carElectroRef.current &&
      this.carYearRef.current &&
      this.carPhotoRef.current &&
      this.carMileageRef.current &&
      this.carPriceRef.current &&
      this.checkboxRef.current
    ) {
      this.carModelRef.current.value = '';
      this.carMakeRef.current.value = '';
      this.carPetrolRef.current.checked = false;
      this.carYearRef.current.value = '';
      this.carPhotoRef.current.value = '';
      this.carMileageRef.current.value = '';
      this.carPriceRef.current.value = '';
      this.checkboxRef.current.checked = false;
    }
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
    const carYear = Number(this.carYearRef.current?.value?.substring(0, 4));
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

  onMileageChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carMileage = this.carMileageRef.current?.value;
    this.setState({ carMileage });
  }

  onPriceChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const carPrice = Number(this.carPriceRef.current?.value);
    this.setState({ carPrice });
  }

  onSubmit(event: React.FormEvent<HTMLFormElement | HTMLSelectElement>) {
    event.preventDefault();
    this.clearForm();

    const newArr = [...this.state.allFormCars];
    newArr.push({
      make: this.state.carMake ? this.state.carMake : '',
      model: this.state.carModel ? this.state.carModel : '',
      price: this.state.carPrice ? this.state.carPrice : 0,
      age: this.state.carYear ? this.state.carYear : 0,
      fuel: this.state.carFuel ? this.state.carFuel : '',
      miles: this.state.carMileage ? this.state.carMileage : '',
      img: this.state.carPhoto ? this.state.carPhoto : '',
    });
    this.setState({
      allFormCars: newArr,
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="form_wrapper flex pb-20 bg-cover bg-center bg-no-repeat justify-end">
          <div className="p-5 mt-10 mr-56 form-floating xl:w-1/4 rounded dark:bg-slate-800 bg-white  bg-opacity-75">
            <form className="flex flex-col" onSubmit={this.onSubmit}>
              <h2 className="text-center font-bold">Car constructor</h2>

              <Select
                defaultValue=""
                classes="mt-5 rounded py-2 px-3 border-2 required"
                placeholder="Select year:"
                subject="Select make"
                onChange={this.onMakeChange}
                reference={this.carMakeRef}
                options={[
                  'Aston Martin',
                  'Audi',
                  'Bmw',
                  'Ferrari',
                  'Mercedes',
                  'Porsche',
                  'Volkswagen',
                ]}
              />

              <TextInput
                classes="mt-8 border-2 rounded py-2 px-3 required"
                placeholder="Car model"
                name="carModel"
                reference={this.carModelRef}
                onChange={this.onModelChange}
              />

              <div className="flex mt-8 items-center">
                <input
                  type="radio"
                  id="petrol"
                  name="carFuel"
                  ref={this.carPetrolRef}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  defaultChecked={false}
                  onChange={this.onPetrolChange}
                  required
                />
                <label htmlFor="petrol" className="ml-2">
                  <span className="block text-m font-medium ">Petrol</span>
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
                  <span className="block text-m font-medium ">Diesel</span>
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
                  <span className="block text-m font-medium">Electro</span>
                </label>
              </div>

              <div className="flex flex-col mt-8">
                <label htmlFor="DataPicker" className="mb-2 font-medium">
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
                  className="w-full px-3 py-2 leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col mt-8">
                <label htmlFor="DataPicker" className="mb-2 font-medium ">
                  Choose a car photo:
                  <input
                    type="file"
                    id="PhotoPicker"
                    name="file"
                    accept="image/png, image/gif, image/jpeg"
                    className="block mt-2 w-full text-sm cursor-pointer
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                    ref={this.carPhotoRef}
                    onChange={this.onPhotoChange}
                    required
                  />
                </label>
              </div>

              <NumberInput
                classes="border-2 rounded py-2 px-3 mt-8"
                minNumber="0"
                placeholder="Car mileage"
                name="carMake"
                reference={this.carMileageRef}
                onChange={this.onMileageChange}
              />

              <NumberInput
                classes="border-2 rounded py-3 px-3 mt-8 text-xl"
                minNumber="0"
                placeholder="Car price $"
                name="carPrice"
                reference={this.carPriceRef}
                onChange={this.onPriceChange}
              />

              <div className="flex items-center mt-8">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  ref={this.checkboxRef}
                  className="mr-2 h-5 w-5 text-blue-600"
                  required
                />
                <label htmlFor="checkbox" className="text-xl">
                  I consent to my personal data
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 text-3xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {this.state.allFormCars.length !== 0 ? (
          <div className="mt-12 mb-12">
            <div className="flex justify-center gap-16 flex-wrap">
              {this.state.allFormCars?.map((car: ICarSchema, index) => (
                <Card key={index} car={car} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
