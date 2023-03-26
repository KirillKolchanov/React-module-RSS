import React from 'react';

type FileInputProps = {
  id: string;
  name: string;
  classes: string;
  accept: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subject: string;
};

class FileInput extends React.Component<FileInputProps> {
  constructor(props: FileInputProps) {
    super(props);
  }

  render() {
    const { id, name, classes, reference, onChange, subject } = this.props;

    return (
      <label htmlFor="DataPicker" className="mb-2 font-medium ">
        {subject}
        <input
          type="file"
          id={id}
          name={name}
          className={classes}
          accept="image/png, image/gif, image/jpeg"
          ref={reference}
          onChange={onChange}
          required
        />
      </label>
    );
  }
}

export default FileInput;
