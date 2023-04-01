import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type NumberInputProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  placeholder: string;
  minNumber: string;
  subject: string;
  requare: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NumberInput = ({
  form,
  classes,
  placeholder,
  minNumber,
  subject,
  onChange,
  requare,
}: NumberInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <input
        type="number"
        className={classes}
        placeholder={placeholder}
        {...register(subject, {
          required: requare,
          min: minNumber,
          onChange: onChange,
        })}
      />
    </>
  );
};

export default NumberInput;
