import React from 'react';

type NumberInputProps = {
  classes: string;
  placeholder: string;
  name: string;
  minNumber: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class NumberInput extends React.Component<NumberInputProps> {
  constructor(props: NumberInputProps) {
    super(props);
  }

  render() {
    const { classes, placeholder, name, minNumber, reference, onChange } = this.props;

    return (
      <input
        className={classes}
        type="number"
        placeholder={placeholder}
        name={name}
        min={minNumber}
        ref={reference}
        onChange={onChange}
        required
      />
    );
  }
}

export default NumberInput;
