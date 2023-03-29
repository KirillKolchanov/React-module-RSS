import React from 'react';
import WarningMessage from './WarningMessage';

type FileInputProps = {
  id: string;
  name: string;
  classes: string;
  accept: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subject: string;
  warningMessage: string;
  valid: boolean;
};

class FileInput extends React.Component<FileInputProps> {
  constructor(props: FileInputProps) {
    super(props);
  }

  render() {
    const { id, name, classes, reference, onChange, subject, valid, warningMessage } = this.props;

    return (
      <>
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
          />
        </label>
        {valid ? null : <WarningMessage valid={valid}>{warningMessage}</WarningMessage>}
      </>
    );
  }
}

export default FileInput;
