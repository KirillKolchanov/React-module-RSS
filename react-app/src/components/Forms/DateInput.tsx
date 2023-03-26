import React from 'react';

type DateInputProps = {
  classes: string;
  name: string;
  min: string;
  max: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subject: string;
};

class DateInput extends React.Component<DateInputProps> {
  constructor(props: DateInputProps) {
    super(props);
  }

  render() {
    const { classes, min, max, name, reference, onChange, subject } = this.props;

    return (
      <>
        <label htmlFor="DataPicker" className="mb-2 font-medium">
          {subject}
        </label>
        <input
          className={classes}
          type="date"
          name={name}
          min={min}
          max={max}
          ref={reference}
          onChange={onChange}
        />
      </>
    );
  }
}

export default DateInput;
