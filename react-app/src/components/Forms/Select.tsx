import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type SelectProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  subject: string;
  options: string[];
  defaultValue: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  form,
  classes,
  subject,
  options,
  defaultValue,
  onChange,
}: SelectProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="mt-5 flex flex-col">
      <select
        {...register(subject, {
          required: 'Please, select a make of the car',
          onChange: onChange,
        })}
        className={classes}
        defaultValue={defaultValue}
        placeholder={`Select ${subject}`}
      >
        <option disabled value="">
          {`Select ${subject}`}
        </option>
        {options.map(
          (car: string, index: number): JSX.Element => (
            <option key={index} value={car}>
              {car}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Select;
