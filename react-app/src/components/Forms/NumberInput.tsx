import React from 'react';
import WarningMessage from './WarningMessage';

type NumberInputProps = {
  classes: string;
  placeholder: string;
  name: string;
  minNumber: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  warningMessage: string;
  valid: boolean;
};

class NumberInput extends React.Component<NumberInputProps> {
  constructor(props: NumberInputProps) {
    super(props);
  }

  render() {
    const { classes, placeholder, name, minNumber, reference, onChange, valid, warningMessage } =
      this.props;

    return (
      <>
        <input
          className={valid ? classes : `${classes} border-red-500`}
          type="number"
          placeholder={placeholder}
          name={name}
          min={minNumber}
          ref={reference}
          onChange={onChange}
        />
        {valid ? null : <WarningMessage valid={valid}>{warningMessage}</WarningMessage>}
      </>
    );
  }
}

export default NumberInput;
