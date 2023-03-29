import React from 'react';
import WarningMessage from './WarningMessage';

type TextInputProps = {
  classes: string;
  placeholder: string;
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  warningMessage: string;
  valid: boolean;
};

class TextInput extends React.Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    const { classes, placeholder, name, reference, onChange, valid, warningMessage } = this.props;

    return (
      <>
        <input
          className={valid ? classes : `${classes} border-red-500`}
          type="text"
          placeholder={placeholder}
          name={name}
          ref={reference}
          onChange={onChange}
        />
        {valid ? null : <WarningMessage valid={valid}>{warningMessage}</WarningMessage>}
      </>
    );
  }
}

export default TextInput;
