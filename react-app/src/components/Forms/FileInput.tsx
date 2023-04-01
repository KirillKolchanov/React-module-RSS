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
      <label htmlFor="DataPicker" className="mt-8 mb-2 font-medium">
        {text}
        <input
          type="file"
          className={classes}
          accept={accept}
          {...register(subject, {
            required: 'Please, select an image',
            onChange: onChange,
          })}
        />
      </label>
    </>
  );
};

export default FileInput;
