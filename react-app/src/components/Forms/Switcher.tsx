import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type SwitcherProps = {
  form: UseFormReturn<FieldValues, unknown>;
  name: string;
  classes: string;
  defaultChecked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Switcher = ({ form, name, classes, value, defaultChecked, onChange }: SwitcherProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <input
        type="radio"
        className={classes}
        value={value}
        defaultChecked={defaultChecked}
        {...register(name, {
          required: 'Please choose the fuel type',
          onChange: onChange,
        })}
      />
      <label htmlFor={name} className="ml-2">
        <span className="block text-m font-medium">{value}</span>
      </label>
    </>
  );
};

export default Switcher;
