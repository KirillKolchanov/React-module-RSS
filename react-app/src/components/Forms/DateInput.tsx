import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type DateInputProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  subject: string;
  text: string;
  min: string;
  max: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = ({ form, classes, subject, text, min, max, onChange }: DateInputProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <label htmlFor="DataPicker" className="mb-2 font-medium">
        {text}
      </label>
      <input
        className={errors[subject] ? `${classes} border-red-500` : classes}
        type="date"
        min={min}
        max={max}
        {...register(subject, {
          required: 'Select a date of production',
          onChange: onChange,
        })}
      />
      {errors[subject] && <p className="mt-2 text-red-500">{errors[subject]?.message as string}</p>}
    </>
  );
};

export default DateInput;
