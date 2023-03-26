import React from 'react';

type TextInputProps = {
  classes: string;
  placeholder: string;
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class TextInput extends React.Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    const { classes, placeholder, name, reference, onChange } = this.props;

    return (
      <input
        className={classes}
        type="text"
        placeholder={placeholder}
        name={name}
        ref={reference}
        onChange={onChange}
        required
      />
    );
  }
}

export default TextInput;
