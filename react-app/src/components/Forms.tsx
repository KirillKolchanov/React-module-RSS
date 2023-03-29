import React, { Component, createRef, RefObject } from 'react';

import '../styles/pages/Forms.css';

import { ICarSchema } from '../models';
import Switcher from './Forms/Switcher';
import Card from './Card';
import TextInput from './Forms/TextInput';
import NumberInput from './Forms/NumberInput';
import Select from './Forms/Select';
import DateInput from './Forms/DateInput';
import FileInput from './Forms/FileInput';
import Checkbox from './Forms/Checkbox';
import Button from './Button';
import warnings from '../utils/warnings';
import WarningMessage from './Forms/WarningMessage';

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
  make: boolean;
  model: boolean;
  fuel: boolean;
  date: boolean;
  file: boolean;
  mileage: boolean;
  price: boolean;
  checkbox: boolean;
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
      make: true,
      model: true,
      fuel: true,
      date: true,
      file: true,
      mileage: true,
      price: true,
      checkbox: true,
    };

    this.checkValidation = this.checkValidation.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm(): void {
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

    this.setState({
      carMake: '',
      carModel: '',
      carFuel: '',
      carYear: 0,
      carPhoto: '',
      carMileage: '',
      carPrice: 0,
    });
  }

  checkValidation(): void | null {
    if (this.state.carMake?.length === 0) {
      this.setState({ make: false });
    }

    if (this.state.carModel?.length === 0) {
      this.setState({ model: false });
    }

    if (this.state.carFuel?.length === 0) {
      this.setState({ fuel: false });
    }

    if (!this.state.carYear) {
      this.setState({ date: false });
    }

    if (!this.state.carPhoto) {
      this.setState({ file: false });
    }

    if (!this.state.carMileage) {
      this.setState({ mileage: false });
    }

    if (!this.state.carPrice) {
      this.setState({ price: false });
    }

    if (this.checkboxRef.current?.checked === false) {
      this.setState({ checkbox: false });
    }

    if (
      this.state.carMake?.length === 0 ||
      this.state.carModel?.length === 0 ||
      this.state.carFuel?.length === 0 ||
      !this.state.carYear ||
      !this.state.carPhoto ||
      !this.state.carMileage ||
      !this.state.carPrice ||
      this.checkboxRef.current?.checked === false
    ) {
      return null;
    }
  }

  cardAddition(): void {
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
      make: true,
      model: true,
      fuel: true,
      date: true,
      file: true,
      mileage: true,
      price: true,
      checkbox: true,
    });
    this.clearForm();
  }

  onMakeChange(): void {
    const carMake = this.carMakeRef.current?.value;
    this.setState({ carMake, make: true });
  }

  onModelChange(): void {
    const carModel = this.carModelRef.current?.value;
    this.setState({ carModel, model: true });
  }

  onYearChange(): void {
    const carYear = Number(this.carYearRef.current?.value?.substring(0, 4));
    this.setState({ carYear, date: true });
  }

  onPetrolChange(): void {
    const carFuel = this.carPetrolRef.current?.id;
    this.setState({ carFuel, fuel: true });
  }

  onDieselChange(): void {
    const carFuel = this.carDieselRef.current?.id;
    this.setState({ carFuel, fuel: true });
  }

  onElectroChange(): void {
    const carFuel = this.carElectroRef.current?.id;
    this.setState({ carFuel, fuel: true });
  }

  onPhotoChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
    const carPhoto: HTMLInputElement | null = this.carPhotoRef.current;
    if (event.target.name === 'file' && carPhoto?.files && carPhoto.files.length) {
      this.setState({ carPhoto: URL.createObjectURL(carPhoto.files[0]), file: true });
    }
  }

  onMileageChange(): void {
    const carMileage = this.carMileageRef.current?.value;
    this.setState({ carMileage, mileage: true });
  }

  onPriceChange(): void {
    const carPrice = Number(this.carPriceRef.current?.value);
    this.setState({ carPrice, price: true });
  }

  onCheckboxChange(): void {
    this.setState({ checkbox: true });
  }

  onSubmit(event: React.FormEvent<HTMLFormElement | HTMLSelectElement>): void {
    event.preventDefault();

    if (this.checkValidation() === null) {
      return;
    }

    this.cardAddition();
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="form_wrapper flex pb-20 bg-cover bg-center bg-no-repeat justify-end">
          <div className="p-5 mt-10 mr-56 form-floating xl:w-1/4 rounded dark:bg-slate-800 bg-white  bg-opacity-75">
            <form className="flex flex-col" onSubmit={this.onSubmit.bind(this)}>
              <h2 className="text-center font-bold">Car constructor</h2>

              <Select
                defaultValue=""
                classes="mt-5 rounded py-2 px-3 border-2 required"
                placeholder="Select year:"
                subject="Select make"
                onChange={this.onMakeChange.bind(this)}
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
                valid={this.state.make}
                warningMessage={warnings.make.emptyInput}
              />

              <TextInput
                classes="mt-8 border-2 rounded py-2 px-3 required"
                placeholder="Car model"
                name="carModel"
                reference={this.carModelRef}
                onChange={this.onModelChange.bind(this)}
                valid={this.state.model}
                warningMessage={warnings.model.emptyInput}
              />

              <div
                className={
                  this.state.fuel
                    ? 'flex mt-8 items-center'
                    : 'flex mt-8 items-center p-2 border-2 border-red-500'
                }
              >
                <Switcher
                  id="petrol"
                  name="carFuel"
                  classes="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  reference={this.carPetrolRef}
                  defaultChecked={false}
                  onChange={this.onPetrolChange.bind(this)}
                  subject="Petrol"
                />
                <Switcher
                  id="diesel"
                  name="carFuel"
                  classes="ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  reference={this.carDieselRef}
                  defaultChecked={false}
                  onChange={this.onDieselChange.bind(this)}
                  subject="Diesel"
                />
                <Switcher
                  id="electro"
                  name="carFuel"
                  classes="ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  reference={this.carElectroRef}
                  defaultChecked={false}
                  onChange={this.onElectroChange.bind(this)}
                  subject="Electro"
                />
              </div>
              {this.state.fuel ? null : (
                <WarningMessage valid={this.state.fuel}>{warnings.fuel.emptyInput}</WarningMessage>
              )}

              <div className="flex flex-col mt-8">
                <DateInput
                  classes="w-full px-3 py-2 leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="DataPicker"
                  min="1990-01-01"
                  max="2023-01-01"
                  reference={this.carYearRef}
                  onChange={this.onYearChange.bind(this)}
                  subject="Select the year of production:"
                  valid={this.state.date}
                  warningMessage={warnings.year.emptyInput}
                />
              </div>

              <div
                className={
                  this.state.file
                    ? 'flex flex-col mt-8'
                    : `flex flex-col mt-8 p-2 border-2 border-red-500`
                }
              >
                <FileInput
                  id="PhotoPicker"
                  name="file"
                  classes="block mt-2 w-full text-sm cursor-pointer
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                  accept="image/png, image/gif, image/jpeg"
                  reference={this.carPhotoRef}
                  onChange={this.onPhotoChange.bind(this)}
                  subject="Choose a car photo:"
                  valid={this.state.file}
                  warningMessage={warnings.file.emptyInput}
                />
              </div>

              <NumberInput
                classes="border-2 rounded py-2 px-3 mt-8"
                minNumber="0"
                placeholder="Car mileage"
                name="carMake"
                reference={this.carMileageRef}
                onChange={this.onMileageChange.bind(this)}
                valid={this.state.mileage}
                warningMessage={warnings.mileage.emptyInput}
              />

              <NumberInput
                classes="border-2 rounded py-3 px-3 mt-8 text-xl"
                minNumber="0"
                placeholder="Car price $"
                name="carPrice"
                reference={this.carPriceRef}
                onChange={this.onPriceChange.bind(this)}
                valid={this.state.price}
                warningMessage={warnings.price.emptyInput}
              />

              <div className="flex items-center mt-8">
                <Checkbox
                  id="checkbox"
                  name="checkbox"
                  reference={this.checkboxRef}
                  classes="mr-2 h-5 w-5 text-blue-600 border-5"
                  subject="I consent to my personal data"
                  onChange={this.onCheckboxChange.bind(this)}
                  valid={this.state.checkbox}
                />
              </div>
              {this.state.checkbox ? null : (
                <WarningMessage valid={this.state.checkbox}>
                  {warnings.checkbox.emptyInput}
                </WarningMessage>
              )}

              <Button
                type="submit"
                classes="mt-8 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 text-3xl"
                subject="Submit"
              />
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
