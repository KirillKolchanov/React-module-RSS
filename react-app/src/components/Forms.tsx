import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

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
import warnings from '../utils/warnings';

const Forms = (): JSX.Element => {
  const form: UseFormReturn<FieldValues, unknown> = useForm();

  const { handleSubmit, reset } = form;

  const [cars, setCars] = useState<ICarSchema[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues): void => {
    const fileData = new Blob([data.file[0]]);
    setCars((prevState: ICarSchema[]): ICarSchema[] => {
      return [
        ...prevState,
        {
          make: data.make,
          model: data.model,
          fuel: data.fuel,
          age: +data.date.substring(0, 4),
          img: URL.createObjectURL(fileData),
          miles: data.mileage,
          price: data.price,
        },
      ];
    });
    alert('The car is created!');
    reset();
  };

  return (
    <div>
      <div className="form_wrapper flex pb-20 bg-cover bg-center bg-no-repeat justify-end">
        <div className="p-5 mt-10 mr-56 form-floating xl:w-1/4 rounded dark:bg-slate-800 bg-white  bg-opacity-75">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center font-bold">Car constructor</h2>

            <Select
              form={form}
              classes="mt-2 rounded py-2 px-3 border-2 required"
              subject="make"
              options={[
                'Aston Martin',
                'Audi',
                'Bmw',
                'Ferrari',
                'Mercedes',
                'Porsche',
                'Volkswagen',
              ]}
              defaultValue=""
            />

            <TextInput
              form={form}
              classes="mt-8 border-2 rounded py-2 px-3 required"
              placeholder="Car model"
              subject="model"
            />

            <Switcher
              form={form}
              name="fuel"
              classes="ml-4 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
              defaultChecked={false}
              values={['Petrol', 'Diesel', 'Electro']}
            />

            <div className="flex flex-col mt-8">
              <DateInput
                form={form}
                classes="w-full px-3 py-2 leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline cursor-pointer"
                subject="date"
                min="1990-01-01"
                max="2023-01-01"
                text="Select the year of production:"
              />
            </div>

            <FileInput
              form={form}
              classes="block mt-2 w-full text-sm cursor-pointer
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              accept="image/png, image/gif, image/jpeg"
              subject="file"
              text="Choose a car photo:"
            />

            <NumberInput
              form={form}
              classes="border-2 rounded py-2 px-3 mt-8"
              minNumber="0"
              placeholder="Car mileage"
              subject="mileage"
              warning={[warnings.mileage.emptyInput, warnings.mileage.minValue]}
            />

            <NumberInput
              form={form}
              classes="border-2 rounded py-3 px-3 mt-8 text-xl"
              placeholder="Car price $"
              minNumber="0"
              subject="price"
              warning={[warnings.price.emptyInput, warnings.price.minValue]}
            />

            <Checkbox
              form={form}
              subject="checkbox"
              classes="mr-2 h-5 w-5 text-blue-600 border-5 cursor-pointer"
              text="I consent to my personal data"
            />

            <input
              type="submit"
              value="Submit"
              className="mt-8 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 text-3xl cursor-pointer"
            />
          </form>
        </div>
      </div>

      {cars.length !== 0 ? (
        <div className="mt-12 mb-12">
          <div className="flex justify-center gap-16 flex-wrap">
            {cars.map((car: ICarSchema, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Forms;
