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
      <input
        type="checkbox"
        className={classes}
        {...register(subject, {
          required: 'Checkbox is required',
          onChange: onChange,
        })}
      />
      <label>{text}</label>
    </>
  );
};

export default Checkbox;
