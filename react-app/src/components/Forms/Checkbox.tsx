import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type CheckboxProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  subject: string;
  text: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ form, classes, subject, onChange, text }: CheckboxProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div
        className={
          errors[subject]
            ? 'flex items-center mt-8 p-1 border-2 border-red-500'
            : 'flex items-center mt-8'
        }
      >
        <input
          type="checkbox"
          className={classes}
          {...register(subject, {
            required: 'Checkbox is required',
            onChange: onChange,
          })}
        />
        <label>{text}</label>
      </div>
      {errors[subject] && <p className="mt-2 text-red-500">{errors[subject]?.message as string}</p>}
    </>
  );
};

export default Checkbox;
