import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type NumberInputProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  placeholder: string;
  minNumber: string;
  subject: string;
  warning: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NumberInput = ({
  form,
  classes,
  placeholder,
  minNumber,
  subject,
  onChange,
  warning,
}: NumberInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <input
        type="number"
        className={errors[subject] ? `${classes} border-red-500` : classes}
        placeholder={placeholder}
        {...register(subject, {
          required: warning[0],
          min: {
            value: minNumber,
            message: warning[1],
          },
          onChange: onChange,
        })}
      />
      {errors[subject] && <p className="mt-2 text-red-500">{errors[subject]?.message as string}</p>}
    </>
  );
};

export default NumberInput;
