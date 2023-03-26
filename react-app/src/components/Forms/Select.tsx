import React from 'react';

type SelectProps = {
  defaultValue: string;
  classes: string;
  placeholder: string;
  subject: string;
  reference: React.RefObject<HTMLSelectElement>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    const { defaultValue, classes, placeholder, subject, reference, onChange, options } =
      this.props;

    return (
      <select
        defaultValue={defaultValue}
        className={classes}
        placeholder={placeholder}
        ref={reference}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          {subject}
        </option>
        {options.map(
          (make: string): JSX.Element => (
            <option key={make} value={make}>
              {make}
            </option>
          )
        )}
      </select>
    );
  }
}

export default Select;
