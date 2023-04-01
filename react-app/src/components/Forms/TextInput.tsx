import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type TextInputProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  placeholder: string;
  subject: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  form,
  classes,
  placeholder,
  subject,
  onChange,
}: TextInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <input
        {...register(subject, {
          required: 'Please, enter a model of the car',
          onChange: onChange,
        })}
        className={classes}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
