import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type FileInputProps = {
  form: UseFormReturn<FieldValues, unknown>;
  classes: string;
  accept: string;
  subject: string;
  text: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({
  form,
  classes,
  onChange,
  subject,
  text,
  accept,
}: FileInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <label htmlFor="DataPicker" className="mt-8 font-medium">
        {text}
        <input
          type="file"
          className={errors[subject] ? `${classes} border-2 border-red-500 p-1 rounded` : classes}
          accept={accept}
          {...register(subject, {
            required: 'Please, select an image',
            onChange: onChange,
          })}
        />
      </label>
      {errors[subject] && <p className="mt-2 text-red-500">{errors[subject]?.message as string}</p>}
    </>
  );
};

export default FileInput;
