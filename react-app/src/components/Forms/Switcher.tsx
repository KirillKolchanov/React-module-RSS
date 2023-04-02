import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type SwitcherProps = {
  form: UseFormReturn<FieldValues, unknown>;
  name: string;
  classes: string;
  defaultChecked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
};

const Switcher = ({ form, name, classes, values, defaultChecked, onChange }: SwitcherProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <div
        className={
          errors[name]
            ? 'flex items-center border-2 border-red-500 p-1 rounded mt-8'
            : 'flex items-center mt-8'
        }
      >
        {values.map((value, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              className={classes}
              defaultChecked={defaultChecked}
              key={index}
              value={value}
              {...register(name, {
                required: 'Please choose the fuel type',
                onChange: onChange,
              })}
            />
            <label htmlFor={name} className="ml-2">
              <span className="block text-m font-medium">{value}</span>
            </label>
          </div>
        ))}
      </div>
      {errors[name] && <p className="mt-2 text-red-500">{errors[name]?.message as string}</p>}
    </>
  );
};

export default Switcher;
